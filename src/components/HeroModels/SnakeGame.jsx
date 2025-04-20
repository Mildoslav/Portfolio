// src/components/HeroModels/SnakeGame.jsx
import React, { useState, useEffect, useRef, useCallback, memo } from 'react';

const LOGICAL_WIDTH = 400;
const LOGICAL_HEIGHT = 225;
const PIXEL_SCALE = 15;

const GRID_COLS = Math.floor(LOGICAL_WIDTH / PIXEL_SCALE);
const GRID_ROWS = Math.floor(LOGICAL_HEIGHT / PIXEL_SCALE);

const BACKGROUND_COLOR = '#000000';
const SNAKE_COLOR = 'lime';
const FOOD_COLOR = 'red';
const TEXT_COLOR = 'white';
const GAMEOVER_COLOR = 'orange';

const INITIAL_GAME_SPEED = 150;

const DIRECTIONS = { UP: {x:0,y:-1}, DOWN: {x:0,y:1}, LEFT: {x:-1,y:0}, RIGHT: {x:1,y:0} };

const getRandomFoodPosition = (snakeBody) => {
    let newFoodPosition;
    do {
        newFoodPosition = {
            x: Math.floor(Math.random() * GRID_COLS),
            y: Math.floor(Math.random() * GRID_ROWS),
        };
    } while (snakeBody.some(segment => segment.x === newFoodPosition.x && segment.y === newFoodPosition.y));
    return newFoodPosition;
};
const createInitialState = () => {
    const startX = Math.floor(GRID_COLS / 2);
    const startY = Math.floor(GRID_ROWS / 2);
    const initialSnake = [ { x: startX, y: startY }, { x: startX - 1, y: startY }, { x: startX - 2, y: startY }, ];
    return {
        snake: initialSnake, food: getRandomFoodPosition(initialSnake), direction: DIRECTIONS.RIGHT,
        nextDirection: DIRECTIONS.RIGHT, speed: INITIAL_GAME_SPEED, score: 0, isGameOver: false,
    };
};

const gameContainerStyle = {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: BACKGROUND_COLOR,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'monospace',
    color: TEXT_COLOR,
    pointerEvents: 'auto',
    userSelect: 'none',
    outline: 'none',
};

const canvasStyle = {
    display: 'block',
    width: '100%',
    height: '100%',
};

const SnakeGame = ({ onClose }) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const gameLoopTimeoutRef = useRef(null);
    const [gameState, setGameState] = useState(createInitialState);
    const [renderPixelSize, setRenderPixelSize] = useState({ width: PIXEL_SCALE, height: PIXEL_SCALE });

    const handleKeyDown = useCallback((e) => {
        const isArrowKey = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key);
        if (isArrowKey) { e.preventDefault(); }
        if (e.key === 'Escape') { if (onClose) onClose(); return; }
        if (gameState.isGameOver && e.key === 'Enter') { setGameState(createInitialState()); return; }
        if (gameState.isGameOver || !isArrowKey) return;
        let newDirection = gameState.nextDirection;
        switch (e.key) {
            case 'ArrowUp': case 'w': if (gameState.direction !== DIRECTIONS.DOWN) newDirection = DIRECTIONS.UP; break;
            case 'ArrowDown': case 's': if (gameState.direction !== DIRECTIONS.UP) newDirection = DIRECTIONS.DOWN; break;
            case 'ArrowLeft': case 'a': if (gameState.direction !== DIRECTIONS.RIGHT) newDirection = DIRECTIONS.LEFT; break;
            case 'ArrowRight': case 'd': if (gameState.direction !== DIRECTIONS.LEFT) newDirection = DIRECTIONS.RIGHT; break;
        }
        if (newDirection !== gameState.nextDirection) { setGameState(prev => ({ ...prev, nextDirection: newDirection })); }
    }, [gameState.direction, gameState.nextDirection, gameState.isGameOver, onClose]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            if (gameLoopTimeoutRef.current) clearTimeout(gameLoopTimeoutRef.current);
        };
    }, [handleKeyDown]);

    useEffect(() => {
        if (gameState.isGameOver) {
            if (gameLoopTimeoutRef.current) clearTimeout(gameLoopTimeoutRef.current);
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext('2d');
            if(ctx && containerRef.current) {
                const { clientWidth: width, clientHeight: height } = containerRef.current;
                const pw = width / GRID_COLS;
                const ph = height / GRID_ROWS;
                draw(ctx, gameState, pw, ph, width, height);
            }
            return;
        }
        gameLoopTimeoutRef.current = setTimeout(() => {
            setGameState(prev => {
                const currentDirection=prev.nextDirection;const head=prev.snake[0];
                const newHead={x:head.x+currentDirection.x,y:head.y+currentDirection.y};
                if(newHead.x<0||newHead.x>=GRID_COLS||newHead.y<0||newHead.y>=GRID_ROWS)return{...prev,isGameOver:true,direction:currentDirection};
                for(let i=1;i<prev.snake.length;i++){if(prev.snake[i].x===newHead.x&&prev.snake[i].y===newHead.y)return{...prev,isGameOver:true,direction:currentDirection};}
                const newSnake=[newHead,...prev.snake];let newScore=prev.score;let newFood=prev.food;let newSpeed=prev.speed;
                if(newHead.x===prev.food.x&&newHead.y===prev.food.y){newScore+=10;newFood=getRandomFoodPosition(newSnake);}else{newSnake.pop();}
                return{...prev,snake:newSnake,food:newFood,direction:currentDirection,score:newScore,speed:newSpeed,isGameOver:false};
            });
        }, gameState.speed);
        return () => { if (gameLoopTimeoutRef.current) clearTimeout(gameLoopTimeoutRef.current); };
    }, [gameState]);

    const draw = useCallback((ctx, state, pixelWidth, pixelHeight, canvasWidth, canvasHeight) => {
        ctx.fillStyle = BACKGROUND_COLOR;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.fillStyle = SNAKE_COLOR;
        state.snake.forEach(segment => {
            ctx.fillRect(segment.x * pixelWidth, segment.y * pixelHeight, pixelWidth - 1, pixelHeight - 1);
        });
        ctx.fillStyle = FOOD_COLOR;
        ctx.fillRect(state.food.x * pixelWidth, state.food.y * pixelHeight, pixelWidth - 1, pixelHeight - 1);
        const scoreFontSize = Math.max(14, Math.min(pixelWidth, pixelHeight) * 1.2);
        ctx.fillStyle = TEXT_COLOR;
        ctx.font = `${scoreFontSize}px monospace`;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillText(`Score: ${state.score}`, pixelWidth, pixelHeight);
        if (state.isGameOver) {
            const gameOverFontSize = Math.max(24, Math.min(pixelWidth, pixelHeight) * 2.5);
            const restartFontSize = Math.max(16, Math.min(pixelWidth, pixelHeight) * 1.5);
            const exitFontSize = Math.max(10, Math.min(pixelWidth, pixelHeight) * 1);
            ctx.fillStyle = GAMEOVER_COLOR;
            ctx.font = `bold ${gameOverFontSize}px monospace`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('GAME OVER', canvasWidth / 2, canvasHeight / 2 - gameOverFontSize * 1.2);
            ctx.fillStyle = TEXT_COLOR;
            ctx.font = `${restartFontSize}px monospace`;
            ctx.fillText(`Final Score: ${state.score}`, canvasWidth / 2, canvasHeight / 2);
            ctx.font = `${restartFontSize * 0.8}px monospace`;
            ctx.fillText('Press ENTER to Restart', canvasWidth / 2, canvasHeight / 2 + gameOverFontSize * 1.2);
            ctx.font = `${exitFontSize}px monospace`;
            ctx.fillText('(ESC to Exit)', canvasWidth / 2, canvasHeight / 2 + gameOverFontSize * 1.2 + restartFontSize);
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !container || !ctx) return;
        let currentWidth = 0;
        let currentHeight = 0;
        const updateCanvasAndDraw = (width, height) => {
            if (!width || !height || (width === currentWidth && height === currentHeight)) return;
            currentWidth = width;
            currentHeight = height;
            canvas.width = width;
            canvas.height = height;
            const pw = width / GRID_COLS;
            const ph = height / GRID_ROWS;
            setRenderPixelSize({ width: pw, height: ph });
            draw(ctx, gameState, pw, ph, width, height);
        };
        const resizeObserver = new ResizeObserver(entries => {
            if (!entries || entries.length === 0) return;
            const { width, height } = entries[0].contentRect;
            updateCanvasAndDraw(width, height);
        });
        resizeObserver.observe(container);
        updateCanvasAndDraw(container.clientWidth, container.clientHeight);
        return () => {
            resizeObserver.disconnect();
        };
    }, [gameState, draw]);

    return (
        <div ref={containerRef} style={gameContainerStyle}>
            <canvas
                ref={canvasRef}
                style={canvasStyle}
            > Your browser does not support HTML Canvas. </canvas>
        </div>
    );
};

export default memo(SnakeGame);