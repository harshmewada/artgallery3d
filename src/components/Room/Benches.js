import { useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";
const angle = Math.PI / 2;

const kundas = [
  {
    position: [-1400, 0, 1400],
    rotation: [0, -angle, 0],
  },
  {
    position: [-1400, 0, 1400],
    rotation: [0, -angle, 0],
  },
];

const Benches = () => {
  const gltf = useGLTF("Models/bench/scene.gltf");
  //   gltf.scene.children.forEach((mesh, i) => {
  //     mesh.castShadow = true;
  //   });
  //   gltf.castShadow = true;
  //   gltf.scene.castShadow = true;

  return (
    <Suspense fallback={null}>
      <group position={[0, 0.5, 0]} scale={0.025}>
        {kundas.map((i, j) => (
          <Bench
            model={gltf.scene}
            key={j}
            rotation={i.rotation}
            position={i.position}
          />
        ))}
      </group>
    </Suspense>
  );
};

const Bench = ({ model, position, rotation, ...props }) => {
  return (
    <mesh rotation={rotation} position={position}>
      <primitive object={model} />
    </mesh>
  );
};

export default Benches;
