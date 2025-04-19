import React, { useEffect, useRef } from "react";

const SnakeGame = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Inicializace hry Snake
        let snake = [{ x: 10, y: 10 }];
        let direction = { x: 0, y: 0 };
        let food = { x: 15, y: 15 };
        const gridSize = 20;
        const tileSize = canvas.width / gridSize;

        const drawGame = () => {
            // Vyčištění plátna
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Nakreslení jídla
            ctx.fillStyle = "red";
            ctx.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);

            // Nakreslení hada
            ctx.fillStyle = "lime";
            snake.forEach((segment) => {
                ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
            });

            // Pohyb hada
            const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
            snake.unshift(head);

            // Kontrola kolize s jídlem
            if (head.x === food.x && head.y === food.y) {
                food = { x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize) };
            } else {
                snake.pop();
            }

            // Kontrola kolize s hranami nebo tělem
            if (
                head.x < 0 ||
                head.y < 0 ||
                head.x >= gridSize ||
                head.y >= gridSize ||
                snake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y)
            ) {
                // Restart hry
                snake = [{ x: 10, y: 10 }];
                direction = { x: 0, y: 0 };
            }
        };

        const handleKeyDown = (event) => {
            switch (event.key) {
                case "ArrowUp":
                    if (direction.y === 0) direction = { x: 0, y: -1 };
                    break;
                case "ArrowDown":
                    if (direction.y === 0) direction = { x: 0, y: 1 };
                    break;
                case "ArrowLeft":
                    if (direction.x === 0) direction = { x: -1, y: 0 };
                    break;
                case "ArrowRight":
                    if (direction.x === 0) direction = { x: 1, y: 0 };
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        const gameInterval = setInterval(drawGame, 100);

        return () => {
            clearInterval(gameInterval);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={400}
            height={400}
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                border: "2px solid white",
            }}
        ></canvas>
    );
};

export default SnakeGame;