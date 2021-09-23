import React from "react";
import { Controls, useControl } from "react-three-gui";
import { a, config } from "@react-spring/three";
import { Text, Billboard, Sky, useHelper } from "@react-three/drei";
import ColorPicker from "./ColorPicker";
import {
  BoxHelper,
  SpotLightHelper,
  DirectionalLightHelper,
  DirectionalLight,
} from "three";
const Light = () => {
  const directionalLight = React.useRef();
  const spotLight = React.useRef();
  const rect = React.useRef();

  // const color = useControl("Material Color", {
  //   type: "custom",
  //   value: "#c59cf1",
  //   component: (props) => <ColorPicker {...props} />,
  // });
  useHelper(directionalLight, DirectionalLightHelper, 0.5, "hotpink");
  useHelper(spotLight, SpotLightHelper, 0.5, "hotpink");
  // useHelper(rect,RectAreaLight, 0.5, "hotpink");

  const d = 50;
  return (
    <>
      {/* <a.mesh> */}
      {/* <Billboard
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false} // Lock the rotation on the z axis (default=false)
      >
        <Text fontSize={1}>{color}</Text>
      </Billboard> */}
      {/* <directionalLight position={[-40, 20, 20]} color="#c59cf1" /> */}
      {/* <directionalLight
        position={[10.5, 20, 10]}
        intensity={4}
        color="#e78f48"
        // castShadow
        // shadow-mapSize-width={1000}
        // shadow-mapSize-height={1000}
        // shadow-camera-far={50}
        // shadow-camera-left={-10}
        // shadow-camera-right={10}
        // shadow-camera-top={10}
        // shadow-camera-bottom={-10}
      />
      <ambientLight color="#8d69cb" /> */}

      {/* <a.directionalLight
          position={[-40, 20, 20]}
          color={color}
          intensity={1}
        /> */}
      {/* <directionalLight
          position={[0, 20, 10]}
          intensity={3}
          color="#ffffb7"
          castShadow
        /> */}
      <planeBufferGeometry args={[1, 1, 1]} />
      <directionalLight
        position={[0, 60, 100]}
        // intensity={10}
        intensity={1}
        // color="#ffffb7"
        color="#ffffff"
        // target={galleryRef.current}
        castShadow
        distance={5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-d}
        shadow-camera-right={d}
        shadow-camera-top={d}
        shadow-camera-bottom={-d}
        shadow-camera-far={1500}
        shadow-camera-near={0.01}
        shadow-bias={-0.0001}
        receiveShadow
        // ref={directionalLight}
      />

      <ambientLight color="#fcf2dc" intensity={0.3} />
      {/* </a.mesh> */}
    </>
  );
};

export default Light;
