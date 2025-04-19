// src/components/HeroModels/SnakeGame.jsx
import React, { useEffect, useRef } from 'react';

// Základní styly (můžeš je mít v CSS souboru)
const gameContainerStyle = {
    width: '400px',
    height: '225px', // Výška monitoru v pixelech (přizpůsob) - poměr 16:9
    backgroundColor: '#000', // Černé pozadí pro hru
    border: '1px solid #333',
    borderRadius: '4px',
    position: 'relative', // Pro absolutní pozicování tlačítka
    overflow: 'hidden', // Skryje cokoliv mimo
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'monospace',
    color: 'lime', // Klasická barva hada :)
};

const closeButtonStyle = {
    position: 'absolute',
    top: '5px',
    right: '5px',
    padding: '2px 5px',
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '10px',
    zIndex: 10, // Aby bylo nad hrou
};

const SnakeGame = ({ onClose }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        ctx.font = '16px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('Snake Game Loading...', canvas.width / 2, canvas.height / 2);

        let x = 10;
        let y = 10;
        let dx = 2;
        let dy = 2;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'lime';
            ctx.fillRect(x, y, 10, 10);
            x += dx;
            y += dy;
            if (x + 10 > canvas.width || x < 0) dx *= -1;
            if (y + 10 > canvas.height || y < 0) dy *= -1;
        };

        return () => {
            console.log("Snake game cleanup");
        };
    }, []);

        return (
            <div style={gameContainerStyle}>
                {/* Tlačítko pro zavření */}
                <button style={closeButtonStyle} onClick={onClose}>
                    X
                </button>

                {/* Canvas pro vykreslení hry */}
                {/* Rozměry canvasu by měly odpovídat gameContainerStyle */}
                <canvas
                    ref={canvasRef}
                    width="400"
                    height="225"
                    style={{ display: 'block' }} // Odstraní případné mezery pod canvasem
                >
                    Your browser does not support the canvas element.
                </canvas>

                {/* Nebo pokud tvá hra používá divy místo canvasu: */}
                {/* <div id="snake-game-area" style={{ width: '100%', height: '100%' }}> */}
                {/*   ... obsah hry ... */}
                {/* </div> */}
            </div>
        );
    };



    export default SnakeGame;