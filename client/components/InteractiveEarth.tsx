import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, OrbitControls, Stars, Ring, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Earth component with realistic textures and atmosphere
function Earth() {
  const meshRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-rotation
  useFrame((state, delta) => {
    if (meshRef.current && !isDragging) {
      meshRef.current.rotation.y += delta * 0.1; // Slow rotation
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += delta * 0.05; // Even slower atmosphere rotation
    }
  });

  // Create realistic Earth texture using NASA's Blue Marble data
  const earthTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;
    
    // Create a more realistic Earth texture with continents and oceans
    // Base ocean color
    ctx.fillStyle = '#1e40af';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add realistic continent shapes with more detail
    ctx.fillStyle = '#16a34a'; // Green for land
    
    // North America - more detailed shape
    ctx.beginPath();
    ctx.ellipse(400, 300, 140, 100, 0, 0, 2 * Math.PI);
    ctx.fill();
    // Alaska
    ctx.beginPath();
    ctx.ellipse(200, 200, 60, 40, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // Europe/Africa - more realistic shapes
    ctx.beginPath();
    ctx.ellipse(1000, 350, 80, 60, 0, 0, 2 * Math.PI); // Europe
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(1000, 500, 100, 140, 0, 0, 2 * Math.PI); // Africa
    ctx.fill();
    
    // Asia - larger and more detailed
    ctx.beginPath();
    ctx.ellipse(1600, 350, 180, 120, 0, 0, 2 * Math.PI);
    ctx.fill();
    // India subcontinent
    ctx.beginPath();
    ctx.ellipse(1400, 450, 60, 80, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // Australia - more realistic shape
    ctx.beginPath();
    ctx.ellipse(1400, 700, 80, 50, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // South America - more detailed
    ctx.beginPath();
    ctx.ellipse(500, 600, 100, 120, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // Antarctica
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath();
    ctx.ellipse(canvas.width/2, canvas.height - 30, canvas.width/2.5, 40, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // Add some desert/arid regions
    ctx.fillStyle = '#ca8a04';
    ctx.beginPath();
    ctx.ellipse(1200, 500, 80, 50, 0, 0, 2 * Math.PI); // Sahara
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(1600, 600, 60, 40, 0, 0, 2 * Math.PI); // Gobi Desert
    ctx.fill();
    
    // Add mountain ranges (darker green)
    ctx.fillStyle = '#15803d';
    ctx.beginPath();
    ctx.ellipse(400, 250, 100, 20, 0, 0, 2 * Math.PI); // Rocky Mountains
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(1000, 300, 60, 15, 0, 0, 2 * Math.PI); // Alps
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(1500, 300, 120, 25, 0, 0, 2 * Math.PI); // Himalayas
    ctx.fill();
    
    // Add polar ice caps
    ctx.fillStyle = '#f8fafc';
    ctx.beginPath();
    ctx.ellipse(canvas.width/2, 50, canvas.width/3, 30, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // Add more realistic cloud patterns
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 60 + 30;
      ctx.beginPath();
      ctx.ellipse(x, y, size, size * 0.5, 0, 0, 2 * Math.PI);
      ctx.fill();
    }
    
    // Add storm systems
    ctx.fillStyle = 'rgba(200, 200, 200, 0.6)';
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 100 + 80;
      ctx.beginPath();
      ctx.ellipse(x, y, size, size * 0.7, 0, 0, 2 * Math.PI);
      ctx.fill();
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }, []);

  // Create night side texture for Earth
  const nightTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;
    
    // Dark base for night side
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add city lights
    ctx.fillStyle = '#fbbf24';
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 3 + 1;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, 2 * Math.PI);
      ctx.fill();
    }
    
    // Denser city lights in certain regions (North America, Europe, Asia)
    ctx.fillStyle = '#f59e0b';
    for (let i = 0; i < 100; i++) {
      const x = 300 + Math.random() * 200; // North America
      const y = 200 + Math.random() * 200;
      const size = Math.random() * 2 + 1;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, 2 * Math.PI);
      ctx.fill();
    }
    
    for (let i = 0; i < 100; i++) {
      const x = 900 + Math.random() * 200; // Europe
      const y = 300 + Math.random() * 200;
      const size = Math.random() * 2 + 1;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, 2 * Math.PI);
      ctx.fill();
    }
    
    for (let i = 0; i < 100; i++) {
      const x = 1500 + Math.random() * 200; // Asia
      const y = 250 + Math.random() * 200;
      const size = Math.random() * 2 + 1;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, 2 * Math.PI);
      ctx.fill();
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }, []);

  // Earth material with realistic properties
  const earthMaterial = useMemo(() => {
    return new THREE.MeshPhongMaterial({
      map: earthTexture,
      shininess: 100,
      specular: 0x222222,
      bumpScale: 0.1,
    });
  }, [earthTexture]);

  // Night side material
  const nightMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      map: nightTexture,
      transparent: true,
      opacity: 0.8,
    });
  }, [nightTexture]);

  // Atmosphere material with glow effect
  const atmosphereMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: 0x87CEEB,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
    });
  }, []);

  return (
    <group>
      {/* Main Earth sphere - Day side */}
      <Sphere
        ref={meshRef}
        args={[1, 64, 64]}
        material={earthMaterial}
        onPointerDown={() => setIsDragging(true)}
        onPointerUp={() => setIsDragging(false)}
        onPointerLeave={() => setIsDragging(false)}
      />
      
      {/* Night side Earth sphere */}
      <Sphere
        args={[1, 64, 64]}
        material={nightMaterial}
      />
      
      {/* Atmosphere glow - multiple layers for realistic effect */}
      <Sphere
        ref={atmosphereRef}
        args={[1.02, 32, 32]}
        material={atmosphereMaterial}
      />
      
      {/* Additional atmosphere layer for more realistic glow */}
      <Sphere
        args={[1.05, 32, 32]}
        material={new THREE.MeshBasicMaterial({
          color: 0x87CEEB,
          transparent: true,
          opacity: 0.05,
          side: THREE.BackSide,
        })}
      />
      
      {/* Outer atmosphere glow */}
      <Sphere
        args={[1.08, 32, 32]}
        material={new THREE.MeshBasicMaterial({
          color: 0x4A90E2,
          transparent: true,
          opacity: 0.02,
          side: THREE.BackSide,
        })}
      />
    </group>
  );
}

// Orbit rings component
function OrbitRings() {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <group>
      {/* Main orbit ring */}
      <Ring
        ref={ringRef}
        args={[1.8, 1.9, 64]}
        rotation={[Math.PI / 2, 0, 0]}
        material={new THREE.MeshBasicMaterial({
          color: 0x4A90E2,
          transparent: true,
          opacity: 0.3,
          side: THREE.DoubleSide,
        })}
      />
      
      {/* Secondary orbit ring */}
      <Ring
        args={[2.2, 2.3, 64]}
        rotation={[Math.PI / 2, 0, 0]}
        material={new THREE.MeshBasicMaterial({
          color: 0x87CEEB,
          transparent: true,
          opacity: 0.15,
          side: THREE.DoubleSide,
        })}
      />
    </group>
  );
}

// Camera controller for smooth panning
function CameraController() {
  const { camera } = useThree();
  const [targetPosition] = useState(new THREE.Vector3(0, 0, 3));
  
  useFrame((state, delta) => {
    // Smooth camera movement
    camera.position.lerp(targetPosition, delta * 0.5);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Main 3D Earth Scene
export default function InteractiveEarth() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Enhanced Lighting for realistic Earth with day/night terminator */}
        <ambientLight intensity={0.2} />
        <directionalLight 
          position={[10, 5, 5]} 
          intensity={2.0} 
          color="#ffffff"
          castShadow
        />
        <directionalLight 
          position={[-5, -2, -2]} 
          intensity={0.1} 
          color="#4A90E2"
        />
        <pointLight 
          position={[15, 10, 10]} 
          intensity={1.5} 
          color="#ffffff"
          distance={30}
        />
        {/* Rim lighting for atmosphere glow */}
        <pointLight 
          position={[-10, -10, -10]} 
          intensity={0.3} 
          color="#87CEEB"
          distance={25}
        />
        
        {/* Enhanced Starfield background */}
        <Stars
          radius={300}
          depth={60}
          count={8000}
          factor={6}
          saturation={0}
          fade
          speed={0.5}
        />
        
        {/* Earth and atmosphere */}
        <Earth />
        
        {/* Orbit rings */}
        <OrbitRings />
        
        {/* Camera controller */}
        <CameraController />
        
        {/* Enhanced Orbit controls for smooth interaction */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          autoRotate={false}
          rotateSpeed={0.8}
          zoomSpeed={0.5}
          minDistance={2}
          maxDistance={8}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI - Math.PI / 4}
          dampingFactor={0.05}
          enableDamping={true}
        />
      </Canvas>
      
      {/* Overlay instructions */}
      <div className="absolute bottom-4 left-4 text-white/70 text-sm pointer-events-none">
        <p>🖱️ Drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  );
}
