// src/components/HeroModels/HeroExperience.jsx
import React, { Suspense, useState, useRef } from "react";
import { Canvas, useThree} from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { Setup } from "./Setup.jsx";
import { useMediaQuery } from "react-responsive";
import gsap from 'gsap';
import * as THREE from 'three';
import SnakeGame from "./SnakeGame.jsx";
import { useLayoutEffect } from 'react';


const SceneController = ({ isGameActive, onCloseGame }) => {
    const { camera, controls, scene } = useThree();
    const initialCameraPos = useRef(null);
    const initialControlsTarget = useRef(null);
    const isInitialStateSaved = useRef(false);


    useLayoutEffect(() => {
        if (controls && !isInitialStateSaved.current) {
            initialCameraPos.current = camera.position.clone();
            initialControlsTarget.current = controls.target.clone();
            isInitialStateSaved.current = true;
        }
    }, [camera, controls]);

    useLayoutEffect(() => {
        if (!isInitialStateSaved.current || !controls) {
            return;
        }

        const ctx = gsap.context(() => {
            const isAtInitialPosition = initialCameraPos.current && controls.target &&
                camera.position.distanceTo(initialCameraPos.current) < 0.1 &&
                controls.target.distanceTo(initialControlsTarget.current) < 0.1;

            if (isGameActive) {
                const zoomToMonitor = () => {
                    controls.enabled = false;
                    const targetPosition = new THREE.Vector3(0, -0.1, 5.8);
                    const targetLookAt = new THREE.Vector3(0, -0.5, 2);

                    gsap.to(camera.position, {
                        duration: 1.5,
                        x: targetPosition.x, y: targetPosition.y, z: targetPosition.z,
                        ease: "power3.inOut",
                        onUpdate: () => controls.target && camera.lookAt(controls.target),
                        overwrite: true
                    });

                    gsap.to(controls.target, {
                        duration: 1.5,
                        x: targetLookAt.x, y: targetLookAt.y, z: targetLookAt.z,
                        ease: "power3.inOut",
                        onUpdate: () => controls.update(),
                        overwrite: true
                    });
                };
                zoomToMonitor();

            } else {
                const zoomOut = () => {
                    gsap.to(camera.position, {
                        duration: 1.5,
                        x: initialCameraPos.current.x, y: initialCameraPos.current.y, z: initialCameraPos.current.z,
                        ease: "power3.inOut",
                        onUpdate: () => controls.target && camera.lookAt(controls.target),
                        overwrite: true
                    });

                    gsap.to(controls.target, {
                        duration: 1.5,
                        x: initialControlsTarget.current.x, y: initialControlsTarget.current.y, z: initialControlsTarget.current.z,
                        ease: "power3.inOut",
                        onUpdate: () => controls.update(),
                        onComplete: () => {
                            controls.enabled = true;
                            controls.update();
                        },
                        overwrite: true
                    });
                };

                if (!isAtInitialPosition) {
                    zoomOut();
                } else {
                    if (controls) controls.enabled = true;
                }
            }
        });

        return () => {
            ctx.revert();
        };

    }, [isGameActive, controls, isInitialStateSaved.current]);

    return null;
};


const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    const [isGameActive, setIsGameActive] = useState(false);

    const handleMonitorClick = () => {
        if (!isGameActive) {
            setIsGameActive(true);
        }
    };

    const handleCloseGame = () => {
        setIsGameActive(false);
    };

    const htmlPosition = [-0.1, 0.2, 0];
    const htmlRotation = [0, 0, 0];
    const htmlScale = 3.4;


    const initialCameraPosition = [0, 4, 10];

    return (
        <Canvas camera={{ position: initialCameraPosition, fov: 45 }} shadows>
            <ambientLight intensity={0.6} />
            <directionalLight
                position={[8, 11, 5]}
                intensity={1.5}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <pointLight position={[-5, 5, -10]} intensity={0.5} />
            <pointLight position={[0, -2, 5]} intensity={0.3} />

            <OrbitControls
                makeDefault
                maxDistance={25}
                minDistance={2}
                minPolarAngle={Math.PI / 8}
                maxPolarAngle={Math.PI / 1.8}
                target={[0, -0.5, 0]}
            />

            <Suspense fallback={null}>
                <group
                    scale={1}
                    position={[0, -1, 0]}
                >
                    <Setup onMonitorClick={handleMonitorClick} />

                    {isGameActive && (
                        <Html
                            center
                            position={htmlPosition}
                            rotation={htmlRotation}
                            scale={htmlScale}
                            transform
                            occlude="blending"
                            distanceFactor={1.6}
                            className="snake-game-html-wrapper"
                            style={{
                                pointerEvents: 'none',
                                userSelect: 'none',
                                width: '400px',
                                height: '225px',
                                backgroundColor: 'transparent',
                            }}
                        >
                            <SnakeGame onClose={handleCloseGame} />
                        </Html>
                    )}
                </group>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.05, 0]} receiveShadow>
                    <planeGeometry args={[50, 50]} />
                    <shadowMaterial opacity={0.3} />
                </mesh>
            </Suspense>

            <SceneController
                isGameActive={isGameActive}
                onCloseGame={handleCloseGame}
            />
        </Canvas>
    );
};

export default HeroExperience;