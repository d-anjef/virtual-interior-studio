import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, Grid } from '@react-three/drei';
import * as THREE from 'three';
import './RoomCanvas.css';

const Room = ({ dimensions }) => {
  const meshRef = useRef();

  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[dimensions.width, dimensions.depth]} />
        <meshStandardMaterial 
          color="#1a1a24" 
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>

      {/* Walls */}
      <mesh position={[0, dimensions.height / 2, -dimensions.depth / 2]} receiveShadow>
        <boxGeometry args={[dimensions.width, dimensions.height, 0.1]} />
        <meshStandardMaterial color="#12121a" roughness={0.9} />
      </mesh>

      <mesh position={[-dimensions.width / 2, dimensions.height / 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[dimensions.depth, dimensions.height, 0.1]} />
        <meshStandardMaterial color="#12121a" roughness={0.9} />
      </mesh>

      <mesh position={[dimensions.width / 2, dimensions.height / 2, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[dimensions.depth, dimensions.height, 0.1]} />
        <meshStandardMaterial color="#12121a" roughness={0.9} />
      </mesh>
    </group>
  );
};

const Furniture = ({ item }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (hovered) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[item.position.x, item.position.y, item.position.z]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
    >
      <boxGeometry args={[item.size.width, item.size.height, item.size.depth]} />
      <meshStandardMaterial 
        color={hovered ? '#8b5cf6' : item.color} 
        roughness={0.5}
        metalness={0.3}
      />
    </mesh>
  );
};

const Lights = ({ intensity, color }) => {
  return (
    <>
      <ambientLight intensity={intensity * 0.3} color={color} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={intensity} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, 10, -10]} intensity={intensity * 0.5} color="#6366f1" />
      <pointLight position={[10, 5, 10]} intensity={intensity * 0.5} color="#8b5cf6" />
    </>
  );
};

const RoomCanvas = ({ roomDimensions, furniture, lightingConfig }) => {
  return (
    <div className="room-canvas">
      <Canvas shadows camera={{ position: [8, 5, 8], fov: 50 }}>
        <Suspense fallback={null}>
          <color attach="background" args={['#0a0a0f']} />
          <fog attach="fog" args={['#0a0a0f', 10, 50]} />
          
          <Lights 
            intensity={lightingConfig.intensity} 
            color={lightingConfig.color}
          />
          
          <Room dimensions={roomDimensions} />
          
          {furniture.map((item) => (
            <Furniture key={item.id} item={item} />
          ))}
          
          <Grid 
            args={[20, 20]} 
            cellColor="#6366f1"
            sectionColor="#8b5cf6"
            fadeDistance={30}
            fadeStrength={1}
            cellSize={0.5}
            sectionSize={2}
          />
          
          <Environment preset="city" />
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
            minDistance={5}
            maxDistance={20}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default RoomCanvas;