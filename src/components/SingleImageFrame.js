import { useHelper, useTexture } from "@react-three/drei";
import React, { Suspense } from "react";
import { PointLightHelper, SpotLightHelper } from "three";
const angle = Math.PI / 2;
const FramesArray = [
  {
    // position: [1, 1, 0],
    rotation: [angle, angle, 0],
    type: "height",
    posType: "left",
  },
  {
    // position: [2, 1, 0],
    rotation: [angle, angle, 0],
    type: "height",
    posType: "right",
  },
  {
    // position: [0, 0.2, 6],
    // position: [1.5, 0, 0],

    rotation: [angle, 0, 0],
    type: "width",
    posType: "bottom",
  },
  {
    // position: [6.2, 0.2, -0.1],
    // position: [1.5, 2, 0],

    rotation: [angle, 0, 0],
    type: "width",
    posType: "top",
  },
];

const getPostion = (posType, height, width) => {
  switch (posType) {
    case "left":
      return [-width / 2 - 0.05, 0, 0];
      break;
    case "right":
      return [width / 2 + 0.05, 0, 0];
      break;
    case "bottom":
      return [0, -height / 2 - 0.05, 0];
      break;

    case "top":
      return [0, height / 2 + 0.05, 0];
      break;

    default:
      return [0, 0, 0];
      break;
  }
};

const SingleImageFrame = ({
  url,
  position,
  rotation,
  width,
  height,
  frameTextures,
}) => {
  const texture = useTexture(url);
  const imageRef = React.useRef();
  // const spotLight = React.useRef();
  // useHelper(spotLight, PointLightHelper, 0.5, "hotpink");

  return (
    <>
      <group position={position} rotation={rotation} castShadow receiveShadow>
        <mesh ref={imageRef}>
          <planeBufferGeometry attach="geometry" args={[width, height]} />
          <meshBasicMaterial
            attach="material"
            map={texture}
            toneMapped={true}
          />
        </mesh>
        {FramesArray.map((f, findex) => (
          <RenderFrame
            position={getPostion(f.posType, height, width)}
            {...f}
            width={width}
            height={height}
            frameTextures={frameTextures}
          />
        ))}
      </group>
    </>
  );
};

const RenderFrame = ({ frameTextures, ...props }) => {
  return (
    <mesh {...props}>
      <boxBufferGeometry args={[props[props.type] + 0.2, 0.1, 0.1]} />
      <meshPhysicalMaterial
        metalness={0.5}
        map={frameTextures[0]}
        // displacementMap={frameTextures[1]}
        normalMap={frameTextures[2]}
        roughnessMap={frameTextures[3]}
        bumpMap={frameTextures[0]}
        bumpScale={0.5}
      />
    </mesh>
  );
};

export default SingleImageFrame;
