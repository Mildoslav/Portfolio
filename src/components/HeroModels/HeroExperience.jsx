import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Setup } from "./Setup.jsx";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";
import React, { useState, useEffect } from "react";
import SnakeGame from "./SnakeGame"


const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

    const [isGameOpen, setIsGameOpen] = useState(false);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            setIsGameOpen(true); // Otevře popup okno
        } else if (event.key === "Escape") {
            setIsGameOpen(false); // Zavře popup okno
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <ambientLight intensity={1} color="#FFFFFF" />
            <directionalLight position={[5, 5, 5]} intensity={1} />


                <OrbitControls
                    enablePan={false}
                    enableZoom={!isTablet}
                    maxDistance={20}
                    minDistance={5}
                    minPolarAngle={Math.PI / 5}
                    maxPolarAngle={Math.PI / 2}
                />

            <Suspense fallback={null}>
                <group
                    scale={isMobile ? 0.7 : 1.4}
                    // position={[0, -3.5, 0]}
                    rotation={[0, -Math.PI / 4, 0]}
                >
                    <Setup />
                </group>
            </Suspense>

        </Canvas>
    );
};

export default HeroExperience;