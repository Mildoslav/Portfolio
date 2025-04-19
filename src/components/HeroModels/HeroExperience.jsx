import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { Setup } from "./Setup.jsx";
import { useMediaQuery } from "react-responsive";
import gsap from 'gsap';
import * as THREE from 'three';
import SnakeGame from "./SnakeGame.jsx";


const SceneController = () => {
    const [isGameActive, setIsGameActive] = useState(false);
    const { camera, controls } = useThree(); // Získání kamery a OrbitControls
    const initialCameraPos = useRef(new THREE.Vector3()); // Pro uložení počáteční pozice
    const initialControlsTarget = useRef(new THREE.Vector3()); // Pro uložení počáten
    // Uložení počátečních hodnot při prvním renderu
    useEffect(() => {
        initialCameraPos.current.copy(camera.position);
        if (controls) {
            initialControlsTarget.current.copy(controls.target);
        }
    }, [camera, controls]);

    const handleMonitorClick = () => {
        console.log("Monitor clicked!");
        setIsGameActive(true);

        if (controls) {
            controls.enabled = false; // Dočasně vypneme OrbitControls
        }

        // Cílová pozice kamery (před monitorem) - NUTNO VYLADIT!
        const targetPosition = new THREE.Vector3(-0.5, 0.5, 3); // Příklad - uprav podle modelu
        // Cílový bod, kam se kamera dívá (střed monitoru) - NUTNO VYLADIT!
        const targetLookAt = new THREE.Vector3(-1.5, 0.2, 0); // Příklad - uprav podle modelu

        // Animace kamery pomocí GSAP
        gsap.to(camera.position, {
            duration: 1.5, // Délka animace v sekundách
            x: targetPosition.x,
            y: targetPosition.y,
            z: targetPosition.z,
            ease: "power2.inOut", // Typ animace
        });

        // Animace cíle OrbitControls (kam se kamera dívá)
        if (controls) {
            gsap.to(controls.target, {
                duration: 1.5,
                x: targetLookAt.x,
                y: targetLookAt.y,
                z: targetLookAt.z,
                ease: "power2.inOut",
                onUpdate: () => controls.update(), // Aktualizuj controls během animace
            });
        } else {
            // Pokud nejsou controls, animuj přímo lookAt kamery (méně plynuls OrbitControls)
            camera.lookAt(targetLookAt); // Toto nemusí fungovat dobře s aktivními controls
        }
    };

    const handleCloseGame = () => {
        console.log("Closing game");
        setIsGameActive(false);

        // Animace kamery zpt na původní pozici
                gsap.to(camera.position, {
                    duration: 1.5,
                    x: initialCameraPos.current.x,
                    y: initialCameraPos.current.y,
                    z: initialCameraPos.current.z,


            const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });


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
                    rotation={[0, 0, 0, ]}
                >
                    <Setup />
                </group>
            </Suspense>

        </Canvas>
    );
};

export default HeroExperience;