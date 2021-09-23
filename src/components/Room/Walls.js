import { useBox, useCompoundBody } from "@react-three/cannon";
import React from "react";
import { DoubleSide } from "three";
import { useTexture } from "@react-three/drei";

import * as THREE from "three";
import Box from "../../examples/ExpUseCubeEnv";
const x = 0;
const z = -4.8;
const defaultargs = [80, 12, 0.5];
const defaultargs2 = [100, 12, 0.5];

const { PI } = Math;
const angle = PI / 2;

const wrapCoff = [6, 6];
const compoundStructure = [
  {
    position: [-0, 8, -50],
    rotation: [0, 0, 0],
    args: defaultargs,
    isSide: false,
  },
  {
    position: [40, 8, -0],
    rotation: [0, angle, 0],
    args: defaultargs2,
    isSide: true,
  },
  {
    position: [-0, 8, 50],
    rotation: [0, 0, 0],
    args: defaultargs,
    isSide: false,
  },
  // {
  //   position: [-25, 10, 0],
  //   rotation: [0, angle, 0],
  //   args: defaultargs2,
  //   isSide: true,
  // },
  // {
  //   position: [-26.5, 0.2, 1.3],
  //   rotation: [0, angle, 0],

  //   args: defaultargs,
  // },
  // {
  //   position: [-8.5, 0.2, 19],
  //   rotation: [0, 0, 0],

  //   args: defaultargs,
  // },
  // {
  //   position: [9, 0.2, 1],
  //   rotation: [0, angle, 0],

  //   args: defaultargs,
  // },
];

function Walls({ rotation, position, material: Mat }) {
  const [ref] = useCompoundBody(() => ({
    position,
    rotation,
    mass: 15,
    shapes: compoundStructure.map((i) => ({ ...i, type: "Box" })),
    type: "Static",
  }));

  const textures = [
    "textures/wall/PaintedPlaster017_1K_Color.jpg",
    "textures/wall/PaintedPlaster017_1K_Displacement.jpg",
    "textures/wall/PaintedPlaster017_1K_NormalDX.jpg",
    "textures/wall/PaintedPlaster017_1K_NormalGL.jpg",
    "textures/wall/PaintedPlaster017_1K_Roughness.jpg",
  ];

  const [texture1, texture2, texture3, texture4, texture5, texture6] =
    useTexture(textures);
  texture1.wrapS = texture1.wrapT = THREE.RepeatWrapping;
  texture1.repeat.set(wrapCoff[0], wrapCoff[1]);

  texture2.wrapS = texture2.wrapT = THREE.RepeatWrapping;
  texture2.repeat.set(wrapCoff[0], wrapCoff[1]);

  texture3.wrapS = texture3.wrapT = THREE.RepeatWrapping;
  texture3.repeat.set(wrapCoff[0], wrapCoff[1]);

  texture4.wrapS = texture4.wrapT = THREE.RepeatWrapping;
  texture4.repeat.set(wrapCoff[0], wrapCoff[1]);

  texture5.wrapS = texture5.wrapT = THREE.RepeatWrapping;
  texture5.repeat.set(wrapCoff[0], wrapCoff[1]);

  const wallType1 = new THREE.BoxBufferGeometry(80, 16, 0.5);
  const wallType2 = new THREE.BoxBufferGeometry(100, 16, 0.5);

  const red = new THREE.MeshPhysicalMaterial({
    map: texture1,
    emissive: "white",
    emissiveIntensity: 0.23,
    // displacementMap: texture2,
    normalMap: texture3,
    roughnessMap: texture5,
    bumpMap: texture2,
    bumpScale: 0.2,
    roughness: 0.5,
  });

  return (
    <group ref={ref}>
      {compoundStructure.map(
        ({ position: p, args, rotation: r, isSide }, i) => (
          <mesh
            castShadow
            receiveShadow
            position={p}
            rotation={r}
            key={i}
            geometry={isSide ? wallType2 : wallType1}
            material={red}
          />
        )
      )}
    </group>
  );
}

// export const Cube = (props) => {
//   // const position = [0, 1, -4.8];
//   // const [ref] = useBox(() => ({
//   //   type: "Static",
//   //   ...props,
//   //   args: [13, 6, 12],

//   // }));

//   return (
//     <Walls position={[0, 1, -4.8]} />
//     // <mesh
//     //   //  position={position}
//     //   ref={ref}
//     //   receiveShadow
//     //   castShadow
//     // >
//     //   <boxGeometry args={[13, 6, 12]} />
//     //   <meshStandardMaterial
//     //     color={"red"}
//     //     side={DoubleSide}
//     //     transparent={true}
//     //   />
//     // </mesh>
//   );
// };

export default Walls;
