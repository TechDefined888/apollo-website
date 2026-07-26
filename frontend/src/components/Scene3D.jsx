import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/**
 * Floating architectural volume — a wireframe rectangular prism
 * representing a house/building form. Slowly rotates and reacts to pointer.
 * Elegant, structural, matches Apollo's building/construction identity.
 */
function ArchVolume() {
  const group = useRef(null);
  const inner = useRef(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    // Slow autonomous drift
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = Math.sin(t * 0.18) * 0.15;
    group.current.position.y = Math.sin(t * 0.4) * 0.12;
    // Subtle pointer influence
    const mx = state.pointer.x;
    const my = state.pointer.y;
    group.current.rotation.z = mx * 0.08;
    if (inner.current) inner.current.rotation.y = -my * 0.2;
  });

  const goldMat = new THREE.LineBasicMaterial({
    color: 0xC5892D,
    transparent: true,
    opacity: 0.85,
  });
  const paleMat = new THREE.LineBasicMaterial({
    color: 0xEBE4D6,
    transparent: true,
    opacity: 0.55,
  });

  // Two nested rectangular prisms suggesting a building
  const outer = new THREE.EdgesGeometry(new THREE.BoxGeometry(2.4, 2.6, 2.0));
  const roof = new THREE.EdgesGeometry(
    new THREE.ConeGeometry(1.8, 1.0, 4).rotateY(Math.PI / 4)
  );
  const core = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.4, 1.6, 1.2));

  return (
    <group ref={group}>
      <lineSegments geometry={outer} material={paleMat} />
      <lineSegments geometry={roof} material={goldMat} position={[0, 1.8, 0]} />
      <group ref={inner}>
        <lineSegments geometry={core} material={goldMat} />
      </group>
      {/* Ground plane hint */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -1.55, 0]}>
        <ringGeometry args={[1.9, 2.0, 64]} />
        <meshBasicMaterial color={0xC5892D} transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

export default function Scene3D({ className = "" }) {
  return (
    <div
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [3.6, 1.8, 4.4], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.6]}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 4, 3]} intensity={0.6} />
          <ArchVolume />
        </Suspense>
      </Canvas>
    </div>
  );
}
