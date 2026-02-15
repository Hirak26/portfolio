import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { Suspense, useMemo, useRef } from "react";

function Particles() {
  const points = useRef<THREE.Points>(null);

  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const count = 15000;

    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Wide “city haze” volume
      positions[i * 3 + 0] = (Math.random() - 0.5) * 220;
      positions[i * 3 + 1] = Math.random() * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 220;
    }
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, []);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y += 0.0008;
    points.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.6;
  });

  return (
    <points ref={points} geometry={geom}>
      <pointsMaterial
        size={0.06}
        transparent
        opacity={0.75}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        color="#7dd3fc"
      />
    </points>
  );
}

function InstancedCity() {
  const mesh = useRef<THREE.InstancedMesh>(null);

  const { dummy, count, data } = useMemo(() => {
    const dummy = new THREE.Object3D();
    const grid = 65; // higher = heavier
    const count = grid * grid;

    const data: Array<{
      x: number;
      z: number;
      h: number;
      seed: number;
    }> = [];

    for (let x = 0; x < grid; x++) {
      for (let z = 0; z < grid; z++) {
        const px = (x - grid / 2) * 3.2;
        const pz = (z - grid / 2) * 3.2;

        // “Downtown” falloff: taller near center
        const dist = Math.sqrt(px * px + pz * pz);
        const core = Math.max(0, 1 - dist / 90);

        const h = 0.8 + Math.pow(core, 2.2) * (18 + Math.random() * 55);
        data.push({ x: px, z: pz, h, seed: Math.random() * 1000 });
      }
    }
    return { dummy, count, data };
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;

    const t = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const b = data[i];

      // subtle “breathing” animation to keep it alive
      const wobble = 1 + Math.sin(t * 0.5 + b.seed) * 0.02;

      dummy.position.set(b.x, (b.h * wobble) / 2 - 8, b.z);
      dummy.scale.set(1, b.h * wobble, 1);

      // slight twist wave
      dummy.rotation.y = Math.sin(t * 0.15 + b.seed) * 0.02;

      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <boxGeometry args={[1.0, 1.0, 1.0]} />
      <meshStandardMaterial
        color="#0b1220"
        metalness={0.8}
        roughness={0.25}
        emissive="#06214a"
        emissiveIntensity={0.9}
      />
    </instancedMesh>
  );
}

function CameraRig() {
  useFrame((state) => {
    const { mouse, camera } = state;

    // parallax camera based on mouse
    const targetX = mouse.x * 2.0;
    const targetY = 2.8 + mouse.y * 1.2;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.04);

    // slow cinematic drift forward/back
    camera.position.z = 24 + Math.sin(state.clock.elapsedTime * 0.25) * 1.2;

    camera.lookAt(0, 2.5, 0);
  });

  return null;
}

export default function HeavyBackground3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 3, 24], fov: 55, near: 0.1, far: 400 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#00040a"]} />
        <fog attach="fog" args={["#00040a", 30, 140]} />

        <ambientLight intensity={0.25} />
        <directionalLight position={[20, 40, 20]} intensity={2.0} />
        <pointLight position={[-20, 10, -10]} intensity={1.2} />

        <Suspense fallback={null}>
          <Environment preset="city" />
        </Suspense>

        <CameraRig />

        {/* Heavy layers */}
        <InstancedCity />
        <Particles />
        <Stars radius={220} depth={80} count={4000} factor={3} fade speed={0.6} />

        {/* Cinematic postprocessing */}
        <EffectComposer>
          <Bloom intensity={1.0} mipmapBlur luminanceThreshold={0.15} />
          <Vignette eskil={false} offset={0.18} darkness={0.7} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
