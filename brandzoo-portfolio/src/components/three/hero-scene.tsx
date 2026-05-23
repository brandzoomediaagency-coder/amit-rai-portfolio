"use client";

import { Float, Line, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group } from "three";

function FloatingDashboard() {
  const group = useRef<Group>(null);
  const points = useMemo(
    () => [
      [-2.4, -0.9, 0],
      [-1.4, 0.8, 0],
      [-0.4, 0.2, 0],
      [0.7, 1.1, 0],
      [1.7, -0.15, 0],
      [2.4, 0.75, 0],
    ] as [number, number, number][],
    [],
  );

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.24) * 0.22;
    group.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.18) * 0.08;
  });

  return (
    <group ref={group} position={[0, -0.15, 0]} rotation={[0.08, -0.2, 0]}>
      <mesh position={[0, 0, -0.08]}>
        <boxGeometry args={[4.8, 2.75, 0.05]} />
        <meshStandardMaterial
          color="#050A10"
          emissive="#030A12"
          metalness={0.18}
          roughness={0.42}
          transparent
          opacity={0.56}
        />
      </mesh>
      <Line points={points} color="#43D9FF" lineWidth={3} transparent opacity={0.95} />
      {points.map((point, index) => (
        <Sphere key={index} args={[0.055, 24, 24]} position={point}>
          <meshStandardMaterial
            color={index % 2 === 0 ? "#A7F950" : "#43D9FF"}
            emissive={index % 2 === 0 ? "#6CD90B" : "#139BFF"}
            emissiveIntensity={1.8}
          />
        </Sphere>
      ))}
      {[-1.7, -0.65, 0.4, 1.45].map((x, index) => (
        <mesh key={x} position={[x, -1.1 + index * 0.12, 0.04]}>
          <boxGeometry args={[0.42, 0.7 + index * 0.22, 0.06]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? "#43D9FF" : "#F6C85F"}
            emissive={index % 2 === 0 ? "#0F7AA3" : "#7B4F00"}
            emissiveIntensity={0.8}
            metalness={0.35}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

function OrbitingObjects() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.z = state.clock.elapsedTime * 0.12;
    group.current.rotation.y = state.clock.elapsedTime * 0.08;
  });

  return (
    <group ref={group}>
      {Array.from({ length: 14 }).map((_, index) => {
        const angle = (index / 14) * Math.PI * 2;
        const radius = index % 2 === 0 ? 3.3 : 4.15;
        return (
          <mesh
            key={index}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * 1.6,
              Math.sin(angle) * radius * 0.28,
            ]}
          >
            <icosahedronGeometry args={[index % 3 === 0 ? 0.16 : 0.1, 0]} />
            <meshStandardMaterial
              color={index % 3 === 0 ? "#F6C85F" : index % 3 === 1 ? "#43D9FF" : "#FF4FD8"}
              emissive={index % 3 === 0 ? "#6B4700" : index % 3 === 1 ? "#0A6C91" : "#70165D"}
              metalness={0.8}
              roughness={0.18}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.4], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[2.8, 3.4, 3]} color="#43D9FF" intensity={2.1} />
      <pointLight position={[-3.5, -2.2, 3]} color="#F6C85F" intensity={1.4} />
      <Float speed={1.4} rotationIntensity={0.45} floatIntensity={0.7}>
        <FloatingDashboard />
      </Float>
      <OrbitingObjects />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.28} />
    </Canvas>
  );
}
