import { useBox, useCompoundBody, usePlane } from "@react-three/cannon";
import React from "react";
import { DoubleSide } from "three";

const x = 0;
const z = -4.8;
const defaultargs = [100, 15, 0.5];
const defaultargs2 = [80, 15, 0.5];

const { PI } = Math;
const angle = PI / 2;
const compoundStructure = [
  {
    position: [0, 8, -37],
    rotation: [0, 0, 0],
    args: defaultargs,
    isSide: false,
  },
  {
    position: [47, 8, -0],
    rotation: [0, angle, 0],
    args: defaultargs2,
    isSide: true,
  },
  {
    position: [-0, 8, 37],
    rotation: [0, 0, 0],
    args: defaultargs,
    isSide: false,
  },
  {
    position: [-47, 8, -0],
    rotation: [0, angle, 0],
    args: defaultargs2,
    isSide: true,
  },
];

function CompoundObj({ rotation, position, material: Mat }) {
  const [ref] = useCompoundBody(() => ({
    position,
    rotation,
    mass: 12,
    shapes: compoundStructure.map((i) => ({ ...i, type: "Box" })),
    type: "Static",
  }));
  return (
    <group ref={ref}>
      {compoundStructure.map(({ position: p, args, rotation: r }, i) => (
        <mesh position={p} rotation={r} key={i}>
          <boxBufferGeometry args={args} />
          <meshPhysicalMaterial opacity={0} refractionRatio={0} transparent />
          {/* <meshPhysicalMaterial opacity={1} color={"red"} refractionRatio={0} /> */}
        </mesh>
      ))}
    </group>
  );
}

const Floore = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));

  return (
    <group>
      <mesh ref={ref}>
        <boxBufferGeometry args={[80, 100]} />
        <meshStandardMaterial opacity={0} transparent={true} />
      </mesh>
    </group>
  );
};

const ModelCompound = () => {
  return (
    <>
      <Floore />
      <CompoundObj />
    </>
  );
};

// export const Cube = (props) => {
//   // const position = [0, 1, -4.8];
//   // const [ref] = useBox(() => ({
//   //   type: "Static",
//   //   ...props,
//   //   args: [13, 6, 12],

//   // }));

//   return (
//     <CompoundObj position={[0, 1, -4.8]} />
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

export default ModelCompound;
