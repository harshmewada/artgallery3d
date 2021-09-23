import React from "react";
import * as THREE from "three";
const angle = Math.PI / 2;

const defaultArgs = [15, 0.3, 0.3];
const FramesArray = [
  {
    position: [-0, 15.4, 0],
    args: defaultArgs,
    rotation: [0, angle, 0],
    type: "height",
    posType: "left",
  },
  {
    position: [0, 0.6, 0],
    args: defaultArgs,

    rotation: [0, angle, 0],
    type: "height",
    posType: "right",
  },
  {
    // position: [0, 0.2, 6],
    position: [0, 8, -7.4],
    args: defaultArgs,

    rotation: [0, 0, angle],
    type: "width",
    posType: "bottom",
  },
  {
    // position: [6.2, 0.2, -0.1],
    position: [0, 8, 7.4],
    args: defaultArgs,

    rotation: [0, 0, angle],
    type: "width",
    posType: "top",
  },
  {
    // position: [6.2, 0.2, -0.1],
    position: [0, 8, 0],
    args: defaultArgs,

    rotation: [0, 0, angle],
    type: "width",
    posType: "top",
  },
];

const RenderFrame = ({ args, ...props }) => {
  return (
    <mesh {...props} castShadow>
      <boxBufferGeometry args={args} />
      <meshPhysicalMaterial color="#333" metalness={1} roughness={0.5} />
    </mesh>
  );
};

const glassMat = new THREE.MeshPhysicalMaterial({
  metalness: 0.9,
  roughness: 0.05,
  envMapIntensity: 0.9,
  clearcoat: 1,
  transparent: true,
  // transmission: .95,
  opacity: 0.6,
  reflectivity: 0.2,
  refractionRatio: 0.985,
  ior: 0.9,
});
export const Window = ({
  glassArgs,
  frmaeArgs,
  glassPosition,
  frameGen,
  ...props
}) => {
  const frames = frameGen || FramesArray;
  return (
    <group position={[0, 0, 0]} {...props}>
      {frames.map((i, j) => (
        <RenderFrame key={j} {...i} args={frmaeArgs || i.args} />
      ))}
      <mesh
        rotation={[0, angle, 0]}
        position={glassPosition || [0, 8, 0]}
        material={glassMat}
      >
        <boxBufferGeometry args={glassArgs} />
      </mesh>
    </group>
  );
};

const Windows = () => {
  return (
    <group>
      <Window position={[-40, 0, -42.3]} glassArgs={[14.5, 14.5, 0.2]} />
      <Window position={[-40, 0, -24]} glassArgs={[14.5, 14.5, 0.2]} />
      <Window position={[-40, 0, -5.7]} glassArgs={[14.5, 14.5, 0.2]} />
      <Window position={[-40, 0, 12.6]} glassArgs={[14.5, 14.5, 0.2]} />
      <Window position={[-40, 0, 30.9]} glassArgs={[14.5, 14.5, 0.2]} />

      {/* <Window position={[-25, 0, -25]} glassArgs={[14.5, 14.5, 0.2]} /> */}
    </group>
  );
};

export default Windows;
