import React from "react";
import * as THREE from "three";
const angle = Math.PI / 2;

const defaultArgs = [70, 0.3, 1];
const defaultArgs2 = [50, 0.3, 1];

const dFramesArray = [
  {
    position: [24, 0, 0],
    args: defaultArgs,
    rotation: [0, angle, 0],
    type: "height",
    posType: "left",
  },
  {
    position: [-24, 0, 0],
    args: defaultArgs,

    rotation: [0, angle, 0],
    type: "height",
    posType: "right",
  },
  {
    // position: [0, 0.2, 6],
    position: [0, 0, -35],
    args: defaultArgs2,

    rotation: [0, 0, 0],
    type: "width",
    posType: "bottom",
  },
  {
    // position: [6.2, 0.2, -0.1],
    position: [0, 0, 35],
    args: defaultArgs2,

    rotation: [0, 0, 0],
    type: "width",
    posType: "top",
  },
  //   1
];

const RenderFrame = ({ frameProps, args, ...props }) => {
  return (
    <mesh {...props} castShadow>
      <boxBufferGeometry args={args} />
      <meshPhysicalMaterial {...frameProps} />
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
  args,
  frameProps,
  ...props
}) => {
  const defaultArgs = [args[0], 0.3, 1];
  const defaultArgs2 = [args[1], 0.3, 1];

  const FramesArray = [
    {
      position: [args[0] / 2.855, 0, 0],
      args: defaultArgs,
      rotation: [0, angle, 0],
      type: "height",
      posType: "left",
    },
    {
      position: [-args[0] / 2.855, 0, 0],
      args: defaultArgs,

      rotation: [0, angle, 0],
      type: "height",
      posType: "right",
    },
    {
      // position: [0, 0.2, 6],
      position: [0, 0, -args[1] / 1.42],
      args: defaultArgs2,

      rotation: [0, 0, 0],
      type: "width",
      posType: "bottom",
    },
    {
      // position: [6.2, 0.2, -0.1],
      position: [0, 0, args[1] / 1.42],
      args: defaultArgs2,

      rotation: [0, 0, 0],
      type: "width",
      posType: "top",
    },
    //   1
  ];
  const frames = frameGen || FramesArray;
  return (
    <group position={[0, 0, 0]} {...props}>
      {frames.map((i, j) => (
        <RenderFrame
          frameProps={frameProps}
          key={j}
          {...i}
          args={frmaeArgs || i.args}
        />
      ))}
      {/* <mesh
        rotation={[0, 0, 0]}
        position={glassPosition || [0, 8, 0]}
        material={glassMat}
      >
        <boxBufferGeometry args={glassArgs} />
      </mesh> */}
    </group>
  );
};

const Windows = () => {
  return (
    <group>
      <Window
        position={[-0, 15.5, 0]}
        args={[70, 50]}
        glassArgs={[14.5, 14.5, 0.2]}
        frameProps={{
          metalness: 1,
          roughness: 0.1,
          color: "yellow",
        }}
      />
      <Window
        position={[-0, 15.5, 0]}
        args={[38.8, 28.2]}
        glassArgs={[14.5, 14.5, 0.2]}
        frameProps={{ metalness: 1, roughness: 0.3, color: "#eee" }}
      />
      <Window
        position={[-0, 15.5, 0]}
        args={[18, 12]}
        glassArgs={[14.5, 14.5, 0.2]}
        frameProps={{ metalness: 1, roughness: 0.1, color: "yellow" }}
      />
      {/* <Window position={[-40, 17, -24]} glassArgs={[14.5, 14.5, 0.2]} /> */}
      {/* <Window position={[-40, 15, -6.3]} glassArgs={[14.5, 14.5, 0.2]} />
      <Window position={[-40, 15, 11.4]} glassArgs={[14.5, 14.5, 0.2]} />
      <Window position={[-40, 15, 29.7]} glassArgs={[14.5, 14.5, 0.2]} /> */}

      {/* <Window position={[-25, 0, -25]} glassArgs={[14.5, 14.5, 0.2]} /> */}
    </group>
  );
};

export default Windows;
