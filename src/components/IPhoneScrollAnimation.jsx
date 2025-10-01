"use client";

import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import ProductSection10 from "./ProductSection10";

const TIMELINE = {
    phone: {
        position: [
            { time: 0, value: { x: -0.3, y: 8, z: 0 } },
            { time: 0.05, value: { x: -0.3, y: 8, z: 0 } },
            { time: 0.1, value: { x: -0.3, y: 0, z: 0 } },
            { time: 0.15, value: { x: -0.3, y: 0, z: 0 } },
            { time: 0.2, value: { x: 3.25, y: 0, z: 0 } },
            { time: 0.25, value: { x: 2.5, y: 0, z: 0 } },
            { time: 0.3, value: { x: -3.0, y: 0, z: 0 } },
            { time: 0.35, value: { x: -3.0, y: 0, z: 0 } },
            { time: 0.4, value: { x: -2.5, y: 0, z: 0 } },
            { time: 0.45, value: { x: 2.5, y: 0, z: 0 } },
            { time: 0.5, value: { x: 2.5, y: 0, z: 0 } },
            { time: 0.55, value: { x: 2.0, y: 0, z: 0 } },
            { time: 0.6, value: { x: -3.0, y: 0, z: 0 } },
            { time: 0.65, value: { x: -3.0, y: 0, z: 0 } },
            { time: 0.7, value: { x: 0.0, y: 0, z: 0 } },
            { time: 0.8, value: { x: 0.0, y: 0, z: 3 } },
            { time: 0.85, value: { x: 0.0, y: 0, z: 3 } },
            { time: 0.95, value: { x: 0.0, y: 0, z: 6 } },
            { time: 1.0, value: { x: 0.0, y: 0, z: 6 } }
        ],
        rotation: [
            { time: 0, value: { x: 0, y: Math.PI, z: 0 } },
            { time: 0.1, value: { x: 0, y: Math.PI, z: 0 } },
            { time: 0.13, value: { x: 0, y: Math.PI * 2, z: 0 } },
            { time: 0.16, value: { x: 0, y: Math.PI * 2, z: 0 } },
            { time: 0.2, value: { x: 0, y: Math.PI * 3, z: 0 } },
            { time: 0.25, value: { x: Math.PI * 1, y: Math.PI * 4, z: 0 } },
            { time: 0.3, value: { x: Math.PI * 2, y: Math.PI * 5, z: 0 } },
            { time: 0.35, value: { x: Math.PI * 2, y: Math.PI * 5, z: 0 } },
            { time: 0.4, value: { x: Math.PI * 1, y: Math.PI * 5, z: 0 } },
            { time: 0.45, value: { x: 0, y: Math.PI * 5, z: 0 } },
            { time: 0.5, value: { x: 0, y: Math.PI * 5, z: 0 } },
            { time: 0.55, value: { x: 0, y: Math.PI * 4, z: 0 } },
            { time: 0.6, value: { x: 0, y: Math.PI * 3, z: 0 } },
            { time: 0.65, value: { x: 0, y: Math.PI * 3, z: 0 } },
            { time: 0.7, value: { x: 0, y: Math.PI * 3, z: Math.PI * 0.5 } },
            { time: 0.8, value: { x: 0, y: Math.PI * 3, z: Math.PI * 0.5 } },
            { time: 0.9, value: { x: 0, y: Math.PI * 3, z: Math.PI * 0.5 } },
            { time: 1.0, value: { x: 0, y: Math.PI * 3, z: Math.PI * 0.5 } }

        ]
    },

    lighting: {
        intensity: [
            { time: 0, value: 0.1 },
            { time: 0.1, value: 0.1 },
            { time: 0.13, value: 0.6 },
            { time: 0.16, value: 1.0 },
            { time: 0.2, value: 0.2 }
        ],
        ambient: [
            { time: 0, value: 0.05 },
            { time: 0.1, value: 0.05 },
            { time: 0.13, value: 0.4 },
            { time: 0.16, value: 0.6 },
            { time: 0.2, value: 0.2 }
        ]
    },


    screen: {

        curtainReveal: [
            { time: 0, value: 0 },
            { time: 0.29, value: 0 },
            { time: 0.3, value: 0 },
            { time: 0.35, value: 1 },
            { time: 1.0, value: 1 }
        ],
        firstOpacity: [
            { time: 0, value: 0 },
            { time: 0.3, value: 0 },
            { time: 0.35, value: 1 },
            { time: 1.0, value: 1 }
        ],
        secondCurtainReveal: [
            { time: 0, value: 0 },
            { time: 0.45, value: 0 },
            { time: 0.49, value: 1 },
            { time: 1.0, value: 1 }
        ],
        secondOpacity: [
            { time: 0, value: 0 },
            { time: 0.45, value: 0 },
            { time: 0.46, value: 1 },
            { time: 1.0, value: 1 }
        ],
        thirdCurtainReveal: [
            { time: 0, value: 0 },
            { time: 0.602, value: 0 },
            { time: 0.645, value: 1 },
            { time: 1.0, value: 1 }
        ],
        thirdOpacity: [
            { time: 0, value: 0 },
            { time: 0.602, value: 0 },
            { time: 0.603, value: 1 },
            { time: 1.0, value: 1 }
        ],
        fourthCurtainReveal: [
            { time: 0, value: 0 },
            { time: 0.80, value: 0 },
            { time: 0.85, value: 1 },
            { time: 1.0, value: 1 },
            { time: 1.0, value: 1 }
        ],
        fourthOpacity: [
            { time: 0, value: 0 },
            { time: 0.80, value: 0 },
            { time: 0.801, value: 1 },
            { time: 1.0, value: 1 }
        ]
    },

    productSection: {
        slideUp: [
            { time: 0, value: 100 },
            { time: 0.94, value: 100 },
            { time: 0.98, value: 0 },
            { time: 1.0, value: 0 }
        ],
        opacity: [
            { time: 0, value: 0 },
            { time: 0.94, value: 0 },
            { time: 0.95, value: 0.3 },
            { time: 0.97, value: 1 },
            { time: 1.0, value: 1 }
        ],
        scale: [
            { time: 0, value: 0.92 },
            { time: 0.94, value: 0.92 },
            { time: 0.96, value: 0.97 },
            { time: 0.97, value: 1 },
            { time: 1.0, value: 1 }
        ]
    },

    texts: [
        {
            id: 'engage',
            timeRange: { start: 0.113, end: 0.24 },
            position: 'left',
            alignment: 'left',
            title: 'ENGAGE',
            titleSize: 'text-4xl',
            content: [
                {
                    subtitle: 'Tap or Scan. Instantly Connected.',
                    description: 'Customers tap an NFC tag or scan a holographic label to instantly launch a mobile page — no app needed.'
                },
                {
                    subtitle: 'Custom Experiences, Your Way.',
                    description: 'Display product info, offer rewards, or showcase exclusive content — all tailored to reflect your brand\'s voice and values.'
                }
            ],
            animation: {
                opacity: [
                    { time: 0, value: 0 },
                    { time: 0.113, value: 0 },
                    { time: 0.15, value: 1 },
                    { time: 0.173, value: 1 },
                    { time: 0.24, value: 1 },
                    { time: 0.245, value: 0 }
                ],
                translateY: [
                    { time: 0, value: 400 },
                    { time: 0.113, value: 400 },
                    { time: 0.15, value: 250 },
                    { time: 0.23, value: 50 },
                ]
            }
        },
        {
            id: 'authenticate',
            timeRange: { start: 0.24, end: 0.40 },
            position: 'right',
            alignment: 'right',
            title: 'AUTHENTICATE',
            titleSize: 'text-4xl',
            content: [
                {
                    subtitle: 'Instant Product Verification.',
                    description: 'Every tap or scan instantly verifies product authenticity through our secure platform.'
                },
                {
                    subtitle: 'Built-In Brand Protection.',
                    description: 'Prevents counterfeiting, reinforces brand trust, and enhances your company\'s credibility.'
                },
                {
                    subtitle: 'Confidence You Can Feel.',
                    description: 'Customers can shop with confidence, knowing they are receiving a genuine product — every time.'
                }
            ],
            animation: {
                opacity: [
                    { time: 0.24, value: 0 },
                    { time: 0.25, value: 1 },
                    { time: 0.39, value: 1 },
                    { time: 0.393, value: 0 }
                ],
                translateY: [
                    { time: 0.25, value: 100 }
                ]
            }
        },
        {
            id: 'Transact',
            timeRange: { start: 0.393, end: 0.65 },
            position: 'left',
            alignment: 'left',
            title: 'TRANSACT',
            titleSize: 'text-4xl',
            content: [
                {
                    subtitle: 'Everything, All in One Tap.',
                    description: 'Customers can ask questions, see product info, and access real-time support.'
                },
                {
                    subtitle: 'Seamless Shopping.',
                    description: 'Fully integrated with platforms like Shopify, WooCommerce, and headless eCommerce setups, enabling effortless checkout.'
                }
            ],
            animation: {
                opacity: [
                    { time: 0.39, value: 0 },
                    { time: 0.394, value: 1 },
                    { time: 0.53, value: 1 },
                    { time: 0.538, value: 0 }
                ],
                translateY: [
                    { time: 0.39, value: 120 },
                    { time: 0.65, value: 100 }
                ]
            }
        },
        {
            id: 'Reward',
            timeRange: { start: 0.538, end: 0.85 },
            position: 'right',
            alignment: 'right',
            title: 'REWARD',
            titleSize: 'text-4xl',
            content: [
                {
                    subtitle: 'Authenticity That Rewards.',
                    description: 'Every tap not only confirms authenticity but also blocks fraud and counterfeit attempts.'
                },
                {
                    subtitle: 'Builds Trust and Transparency.',
                    description: 'Reinforces customer confidence and strengthens your brand’s reputation by ensuring every purchase is 100% authentic.'
                }
            ],
            animation: {
                opacity: [
                    { time: 0.535, value: 0 },
                    { time: 0.538, value: 1 },
                    { time: 0.653, value: 1 },
                    { time: 0.655, value: 0 }
                ],
                translateY: [
                    { time: 0.535, value: 100 },
                ]
            }
        }
    ]
};

function interpolateKeyframes(keyframes, time) {
    if (time <= keyframes[0].time) return keyframes[0].value;
    if (time >= keyframes[keyframes.length - 1].time) return keyframes[keyframes.length - 1].value;

    for (let i = 0; i < keyframes.length - 1; i++) {
        const current = keyframes[i];
        const next = keyframes[i + 1];

        if (time >= current.time && time <= next.time) {
            const progress = (time - current.time) / (next.time - current.time);

            if (typeof current.value === 'number') {
                return current.value + (next.value - current.value) * progress;
            }

            if (typeof current.value === 'object') {
                const result = {};
                for (const key in current.value) {
                    result[key] = current.value[key] + (next.value[key] - current.value[key]) * progress;
                }
                return result;
            }
        }
    }

    return keyframes[0].value;
}

function useTimelineValue(keyframes, scrollProgress) {
    return interpolateKeyframes(keyframes, scrollProgress);
}

function DynamicLights({ scrollProgress }) {
    const lightIntensity = useTimelineValue(TIMELINE.lighting.intensity, scrollProgress);
    const ambientIntensity = useTimelineValue(TIMELINE.lighting.ambient, scrollProgress);

    return (
        <>
            <ambientLight intensity={ambientIntensity * 1.5 + 0.3} />

            <hemisphereLight
                color="#ffffff"
                groundColor="#e8e8e8"
                intensity={0.5 + (ambientIntensity * 0.3)}
                position={[0, 10, 0]}
            />

            <directionalLight
                position={[0, 5, 10]}
                intensity={0.8 + (lightIntensity * 1.2)}
                color="#ffffff"
                castShadow
            />
            <directionalLight
                position={[0, 0, 12]}
                intensity={0.6 + (lightIntensity * 0.8)}
                color="#ffffff"
            />

            <directionalLight
                position={[0, 5, -12]}
                intensity={0.9 + (lightIntensity * 1.1)}
                color="#ffffff"
                castShadow
            />
            <directionalLight
                position={[0, 0, -15]}
                intensity={0.7 + (lightIntensity * 0.9)}
                color="#ffffff"
            />
            <directionalLight
                position={[0, -3, -10]}
                intensity={0.5 + (lightIntensity * 0.6)}
                color="#f5f5f5"
            />

            <directionalLight
                position={[0, 15, 0]}
                intensity={0.7 + (lightIntensity * 0.8)}
                color="#ffffff"
                castShadow
            />
            <directionalLight
                position={[0, 12, 3]}
                intensity={0.5 + (lightIntensity * 0.6)}
                color="#ffffff"
            />

            <directionalLight
                position={[0, -10, 5]}
                intensity={0.4 + (lightIntensity * 0.5)}
                color="#f8f8f8"
            />
            <directionalLight
                position={[0, -8, -3]}
                intensity={0.4 + (lightIntensity * 0.5)}
                color="#f8f8f8"
            />

            <directionalLight
                position={[-12, 3, 0]}
                intensity={0.6 + (lightIntensity * 0.9)}
                color="#ffffff"
            />
            <directionalLight
                position={[-10, 0, 5]}
                intensity={0.5 + (lightIntensity * 0.7)}
                color="#f0f8ff"
            />
            <directionalLight
                position={[-10, 0, -5]}
                intensity={0.5 + (lightIntensity * 0.7)}
                color="#f0f8ff"
            />

            <directionalLight
                position={[12, 3, 0]}
                intensity={0.6 + (lightIntensity * 0.9)}
                color="#ffffff"
            />
            <directionalLight
                position={[10, 0, 5]}
                intensity={0.5 + (lightIntensity * 0.7)}
                color="#f0f8ff"
            />
            <directionalLight
                position={[10, 0, -5]}
                intensity={0.5 + (lightIntensity * 0.7)}
                color="#f0f8ff"
            />

            <directionalLight
                position={[8, 8, 8]}
                intensity={0.4 + (lightIntensity * 0.6)}
                color="#ffffff"
            />
            <directionalLight
                position={[-8, 8, 8]}
                intensity={0.4 + (lightIntensity * 0.6)}
                color="#ffffff"
            />
            <directionalLight
                position={[8, 8, -8]}
                intensity={0.5 + (lightIntensity * 0.7)}
                color="#ffffff"
            />
            <directionalLight
                position={[-8, 8, -8]}
                intensity={0.5 + (lightIntensity * 0.7)}
                color="#ffffff"
            />
            <directionalLight
                position={[8, -5, 8]}
                intensity={0.3 + (lightIntensity * 0.4)}
                color="#f5f5f5"
            />
            <directionalLight
                position={[-8, -5, 8]}
                intensity={0.3 + (lightIntensity * 0.4)}
                color="#f5f5f5"
            />
            <directionalLight
                position={[8, -5, -8]}
                intensity={0.3 + (lightIntensity * 0.4)}
                color="#f5f5f5"
            />
            <directionalLight
                position={[-8, -5, -8]}
                intensity={0.3 + (lightIntensity * 0.4)}
                color="#f5f5f5"
            />

            <spotLight
                position={[0, 10, 10]}
                angle={0.4}
                penumbra={0.3}
                intensity={0.6 + (lightIntensity * 1.0)}
                color="#ffffff"
                castShadow
            />
            <spotLight
                position={[0, 10, -10]}
                angle={0.4}
                penumbra={0.3}
                intensity={0.6 + (lightIntensity * 1.0)}
                color="#ffffff"
                castShadow
            />
            <spotLight
                position={[10, 8, 0]}
                angle={0.4}
                penumbra={0.3}
                intensity={0.5 + (lightIntensity * 0.8)}
                color="#ffffff"
            />
            <spotLight
                position={[-10, 8, 0]}
                angle={0.4}
                penumbra={0.3}
                intensity={0.5 + (lightIntensity * 0.8)}
                color="#ffffff"
            />

            <pointLight
                position={[0, 0, 8]}
                intensity={0.5 + (lightIntensity * 0.6)}
                color="#ffffff"
                distance={20}
            />
            <pointLight
                position={[0, 0, -8]}
                intensity={0.5 + (lightIntensity * 0.6)}
                color="#ffffff"
                distance={20}
            />
            <pointLight
                position={[6, 6, 0]}
                intensity={0.4 + (lightIntensity * 0.5)}
                color="#ffffff"
                distance={18}
            />
            <pointLight
                position={[-6, 6, 0]}
                intensity={0.4 + (lightIntensity * 0.5)}
                color="#ffffff"
                distance={18}
            />
            <pointLight
                position={[0, 8, 0]}
                intensity={0.4 + (lightIntensity * 0.5)}
                color="#ffffff"
                distance={20}
            />
            <pointLight
                position={[0, -6, 0]}
                intensity={0.3 + (lightIntensity * 0.4)}
                color="#f8f8f8"
                distance={18}
            />
        </>
    );
}

function AnimatedIPhone({ url = "/models/iphone15pro.glb", scrollProgress = 0 }) {
    const ref = useRef();
    const groupRef = useRef();
    const { scene } = useGLTF(url);

    const originalTexture = useTexture('/images/screen/App Clip.png');
    const replacementTexture = useTexture('/images/screen/Authenticate.png');
    const transactTexture = useTexture('/images/screen/Transact.png');
    const rewardTexture = useTexture('/images/screen/Reward.png');
    const horizontalTexture = useTexture('/images/screen/Horizontal.png');

    const position = useTimelineValue(TIMELINE.phone.position, scrollProgress);
    const rotation = useTimelineValue(TIMELINE.phone.rotation, scrollProgress);

    const curtainReveal = useTimelineValue(TIMELINE.screen.curtainReveal, scrollProgress);
    const firstOpacity = useTimelineValue(TIMELINE.screen.firstOpacity, scrollProgress);
    const secondCurtainReveal = useTimelineValue(TIMELINE.screen.secondCurtainReveal, scrollProgress);
    const secondOpacity = useTimelineValue(TIMELINE.screen.secondOpacity, scrollProgress);
    const thirdCurtainReveal = useTimelineValue(TIMELINE.screen.thirdCurtainReveal, scrollProgress);
    const thirdOpacity = useTimelineValue(TIMELINE.screen.thirdOpacity, scrollProgress);
    const fourthCurtainReveal = useTimelineValue(TIMELINE.screen.fourthCurtainReveal, scrollProgress);
    const fourthOpacity = useTimelineValue(TIMELINE.screen.fourthOpacity, scrollProgress);

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.position.set(position.x, position.y, position.z);
            groupRef.current.rotation.set(rotation.x, rotation.y, rotation.z);
        }
    });

    return (
        <group ref={groupRef}>
            <primitive ref={ref} object={scene} scale={30} />

            <mesh
                position={[0, 0, -0.2]}
                rotation={[0, Math.PI, 0]}
            >
                <planeGeometry args={[2.2, 4.6]} />
                <meshBasicMaterial
                    map={originalTexture}
                    transparent
                    opacity={1}
                    toneMapped={false}
                />
            </mesh>

            <mesh
                position={[0, 0, -0.21]}
                rotation={[0, Math.PI, 0]}
            >
                <planeGeometry args={[2.2, 4.6]} />
                <meshBasicMaterial
                    map={replacementTexture}
                    transparent
                    opacity={firstOpacity}
                    toneMapped={false}
                    clippingPlanes={[
                        new THREE.Plane(
                            new THREE.Vector3(0, -1, 0),
                            -2.3 + (4.6 * curtainReveal)
                        )
                    ]}
                />
            </mesh>

            <mesh
                position={[0, 0, -0.22]}
                rotation={[0, Math.PI, 0]}
            >
                <planeGeometry args={[2.2, 4.6]} />
                <meshBasicMaterial
                    map={transactTexture}
                    transparent
                    opacity={secondOpacity}
                    toneMapped={false}
                    clippingPlanes={[
                        new THREE.Plane(
                            new THREE.Vector3(0, -1, 0),
                            -2.3 + (4.6 * secondCurtainReveal)
                        )
                    ]}
                />
            </mesh>

            <mesh
                position={[0, 0, -0.23]}
                rotation={[0, Math.PI, 0]}
            >
                <planeGeometry args={[2.2, 4.6]} />
                <meshBasicMaterial
                    map={rewardTexture}
                    transparent
                    opacity={thirdOpacity}
                    toneMapped={false}
                    clippingPlanes={[
                        new THREE.Plane(
                            new THREE.Vector3(0, -1, 0),
                            -2.3 + (4.6 * thirdCurtainReveal)
                        )
                    ]}
                />
            </mesh>

            <mesh
                position={[0, 0, -0.24]}
                rotation={[0, Math.PI, Math.PI / 2]}
            >
                <planeGeometry args={[4.582, 2.291]} />
                <meshBasicMaterial
                    map={horizontalTexture}
                    transparent
                    opacity={fourthOpacity}
                    toneMapped={false}
                    clippingPlanes={[
                        new THREE.Plane(
                            new THREE.Vector3(-1, 0, 0),
                            -2.3 + (4.6 * fourthCurtainReveal)
                        )
                    ]}
                />
            </mesh>

        </group>
    );
}
function MultiScrollText({ scrollProgress }) {
    return (
        <>
            {TIMELINE.texts.map((textConfig) => (
                <TextSection key={textConfig.id} textConfig={textConfig} scrollProgress={scrollProgress} />
            ))}
        </>
    );
}

function TextSection({ textConfig, scrollProgress }) {
    const { id, timeRange, position, alignment, title, titleSize, content, animation } = textConfig;

    const isActive = scrollProgress >= timeRange.start && scrollProgress <= timeRange.end;

    const opacity = useTimelineValue(animation.opacity, scrollProgress);
    const translateY = useTimelineValue(animation.translateY, scrollProgress);

    if (!isActive && opacity <= 0) return null;

    const positionClass = position === 'left' ? 'left-35' : 'right-35';
    const alignmentClass = alignment === 'left' ? 'text-left' : 'text-right';

    const widthClass = position === 'left' ? 'w-96' : 'w-96';

    return (
        <div
            className={`absolute top-1/2 ${widthClass} ${positionClass} z-0 transition-all duration-500 ease-out`}
            style={{
                opacity,
                transform: `translateY(calc(-50% + ${translateY}px))`
            }}
        >
            <h2 className={`${titleSize} font-black mb-5 text-black tracking-wide ${alignmentClass}`}>
                {title}
            </h2>

            <div className={`space-y-3 ${alignmentClass}`}>
                {content.map((section, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="text-lg font-bold mb-2 text-black">
                            {section.subtitle}
                        </h3>
                        <p className="text-base text-gray-600 leading-relaxed">
                            {section.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ScrollText({ scrollProgress }) {
    return <MultiScrollText scrollProgress={scrollProgress} />;
}

function TimelineDebug({ scrollProgress }) {
    const [showDebug, setShowDebug] = useState(false);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'd' && e.ctrlKey) {
                e.preventDefault();
                setShowDebug(!showDebug);
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [showDebug]);

    if (!showDebug) return null;

    const position = useTimelineValue(TIMELINE.phone.position, scrollProgress);
    const rotation = useTimelineValue(TIMELINE.phone.rotation, scrollProgress);
    const lightIntensity = useTimelineValue(TIMELINE.lighting.intensity, scrollProgress);
    const ambientIntensity = useTimelineValue(TIMELINE.lighting.ambient, scrollProgress);

    const curtainReveal = useTimelineValue(TIMELINE.screen.curtainReveal, scrollProgress);
    const firstOpacity = useTimelineValue(TIMELINE.screen.firstOpacity, scrollProgress);
    const secondCurtainReveal = useTimelineValue(TIMELINE.screen.secondCurtainReveal, scrollProgress);
    const secondOpacity = useTimelineValue(TIMELINE.screen.secondOpacity, scrollProgress);

    const activeText = TIMELINE.texts.find(text =>
        scrollProgress >= text.timeRange.start && scrollProgress <= text.timeRange.end
    );
    const textOpacity = activeText ? useTimelineValue(activeText.animation.opacity, scrollProgress) : 0;

    let currentPhase = '';
    if (scrollProgress <= 0.15) currentPhase = '1-Initial Hold';
    else if (scrollProgress <= 0.25) currentPhase = '2-Dropping';
    else if (scrollProgress <= 0.35) currentPhase = '3-Center Hold';
    else if (scrollProgress <= 0.45) currentPhase = '4-First Move';
    else if (scrollProgress <= 0.65) currentPhase = '5-Side Moves';
    else if (scrollProgress <= 0.85) currentPhase = '6-Complex Rotation';
    else if (scrollProgress <= 0.95) currentPhase = '7-Final Position';
    else currentPhase = '8-End Hold';

    return (
        <div className="fixed bottom-4 right-4 bg-black bg-opacity-90 text-white p-4 rounded text-xs font-mono z-50 max-w-xs">
            <div className="text-green-400 font-bold mb-2">🎬 TIMELINE DEBUG</div>

            <div className="border-b border-gray-600 pb-2 mb-2">
                <div className="text-yellow-300">Scroll: {(scrollProgress * 100).toFixed(1)}%</div>
                <div className="text-blue-300">Phase: {currentPhase}</div>
                <div className="text-pink-300">Time: {scrollProgress.toFixed(3)}</div>
            </div>

            <div className="space-y-1 mb-2">
                <div className="text-orange-300">📍 Position:</div>
                <div className="ml-2">X: {position.x.toFixed(2)}</div>
                <div className="ml-2">Y: {position.y.toFixed(2)}</div>
                <div className="ml-2">Z: {position.z.toFixed(2)}</div>
            </div>

            <div className="space-y-1 mb-2">
                <div className="text-purple-300">🔄 Rotation (π/°):</div>
                <div className="ml-2">X: {(rotation.x / Math.PI).toFixed(3)}π ({(rotation.x * 180 / Math.PI).toFixed(1)}°)</div>
                <div className="ml-2">Y: {(rotation.y / Math.PI).toFixed(3)}π ({(rotation.y * 180 / Math.PI).toFixed(1)}°)</div>
                <div className="ml-2">Z: {(rotation.z / Math.PI).toFixed(3)}π ({(rotation.z * 180 / Math.PI).toFixed(1)}°)</div>
            </div>

            <div className="space-y-1 mb-2">
                <div className="text-indigo-300">🔄 Rotation (Raw):</div>
                <div className="ml-2">X: {rotation.x.toFixed(3)}</div>
                <div className="ml-2">Y: {rotation.y.toFixed(3)}</div>
                <div className="ml-2">Z: {rotation.z.toFixed(3)}</div>
            </div>

            <div className="space-y-1 mb-2">
                <div className="text-yellow-300">💡 Lighting:</div>
                <div className="ml-2">Main: {(lightIntensity * 100).toFixed(0)}% ({lightIntensity.toFixed(3)})</div>
                <div className="ml-2">Ambient: {(ambientIntensity * 100).toFixed(0)}% ({ambientIntensity.toFixed(3)})</div>
            </div>

            <div className="space-y-1 mb-2">
                <div className="text-cyan-300">📝 Text:</div>
                <div className="ml-2">Active: {activeText ? activeText.title : 'None'}</div>
                <div className="ml-2">Opacity: {(textOpacity * 100).toFixed(0)}% ({textOpacity.toFixed(3)})</div>
                {activeText && (
                    <div className="ml-2">Position: {activeText.position}</div>
                )}
            </div>

            <div className="space-y-1 mb-2">
                <div className="text-green-300">📱 Screen Animation:</div>
                <div className="ml-2">Curtain Reveal: {(curtainReveal * 100).toFixed(1)}%</div>
                <div className="ml-2">First Opacity: {(firstOpacity * 100).toFixed(1)}%</div>
                <div className="ml-2">Second Curtain Reveal: {(secondCurtainReveal * 100).toFixed(1)}%</div>
                <div className="ml-2">Second Opacity: {(secondOpacity * 100).toFixed(1)}%</div>
            </div>

            <div className="space-y-1 mb-2">
                <div className="text-pink-300">🛍️ Product Section:</div>
                <div className="ml-2">Slide Up: {useTimelineValue(TIMELINE.productSection.slideUp, scrollProgress).toFixed(1)}vh</div>
                <div className="ml-2">Opacity: {(useTimelineValue(TIMELINE.productSection.opacity, scrollProgress) * 100).toFixed(1)}%</div>
                <div className="ml-2">Scale: {useTimelineValue(TIMELINE.productSection.scale, scrollProgress).toFixed(3)}</div>
            </div>

            <div className="text-xs text-gray-400 mt-2 pt-2 border-t border-gray-600">
                Press Ctrl+D to toggle
            </div>
        </div>
    );
}

function ProductSectionOverlay({ scrollProgress }) {
    const productRef = useRef();
    const previousProgress = useRef(0);

    const slideUp = useTimelineValue(TIMELINE.productSection.slideUp, scrollProgress);
    const opacity = useTimelineValue(TIMELINE.productSection.opacity, scrollProgress);
    const scale = useTimelineValue(TIMELINE.productSection.scale, scrollProgress);

    useEffect(() => {
        if (productRef.current) {
            const shouldAnimate = scrollProgress >= 0.94;

            if (shouldAnimate) {
                gsap.to(productRef.current, {
                    y: `${slideUp}vh`,
                    opacity: opacity,
                    scale: scale,
                    duration: 0.4,
                    ease: "power3.out"
                });
            } else {
                gsap.set(productRef.current, {
                    y: '100vh',
                    opacity: 0,
                    scale: 0.92
                });
            }

            previousProgress.current = scrollProgress;
        }
    }, [scrollProgress, slideUp, opacity, scale]);

    return (
        <div
            ref={productRef}
            className="absolute inset-0 z-20 pointer-events-auto"
            style={{
                transform: 'translateY(100vh)',
                opacity: 0,
                scale: 0.95
            }}
        >
            <ProductSection10 />
        </div>
    );
}

export default function IPhoneScrollAnimation() {
    const containerRef = useRef();
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const containerTop = rect.top;
                const containerHeight = rect.height;
                const windowHeight = window.innerHeight;

                const scrollStart = -containerHeight + windowHeight;
                const scrollEnd = windowHeight;
                const scrollRange = scrollEnd - scrollStart;

                const currentScroll = Math.max(0, Math.min(scrollRange, -containerTop + windowHeight));
                const progress = currentScroll / scrollRange;

                setScrollProgress(Math.max(0, Math.min(1, progress)));
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-[1000vh] bg-white mt-5"
        >
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <Canvas
                    camera={{ position: [0, 0, 8], fov: 45 }}
                    style={{ background: 'transparent' }}
                    className="absolute inset-0 z-10"
                    onCreated={({ gl }) => {
                        gl.localClippingEnabled = true;
                    }}
                >
                    <DynamicLights scrollProgress={scrollProgress} />

                    <Suspense fallback={null}>
                        <AnimatedIPhone scrollProgress={scrollProgress} />
                    </Suspense>

                    <OrbitControls
                        enabled={false}
                        enableZoom={false}
                        enablePan={false}
                        enableRotate={false}
                    />
                </Canvas>

                <ScrollText scrollProgress={scrollProgress} />
                <ProductSectionOverlay scrollProgress={scrollProgress} />
                <TimelineDebug scrollProgress={scrollProgress} />
            </div>
        </section>
    );
}