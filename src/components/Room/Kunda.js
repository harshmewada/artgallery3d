import { useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";

const kundas = [
  {
    position: [-2, 0, 0],
  },
  {
    position: [-0.5, 0, 0],
  },
];

const Kunda = () => {
  const gltf = useGLTF("Models/kundu/potted_plant_04_1k.gltf");
  gltf.scene.children.forEach((mesh, i) => {
    mesh.castShadow = true;
  });
  gltf.castShadow = true;
  gltf.scene.castShadow = true;

  return (
    <Suspense fallback={null}>
      <group position={[0, 0.5, 0]} scale={20}>
        {kundas.map((i, j) => (
          <Kundu model={gltf.scene} key={j} position={[0, 0, j + 1]} />
        ))}
      </group>
    </Suspense>
  );
};

const Kundu = ({ model, position, ...props }) => {
  return <primitive object={model} position={position} />;
};

export default Kunda;
