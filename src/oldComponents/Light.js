import React from "react";
import { Controls, useControl } from "react-three-gui";
import { a, config } from "@react-spring/three";
import { Text, Billboard } from "@react-three/drei";
import ColorPicker from "./ColorPicker";

const Light = () => {
  // const color = useControl("Material Color", {
  //   type: "custom",
  //   value: "#c59cf1",
  //   component: (props) => <ColorPicker {...props} />,
  // });

  return (
    <>
      <a.mesh>
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
        <directionalLight
          position={[10.5, 20, 10]}
          intensity={3}
          color="#C29775"
        />
        {/* <ambientLight color="#F2CFC2" /> */}
      </a.mesh>
    </>
  );
};

export default Light;
