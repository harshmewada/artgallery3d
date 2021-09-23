import React from "react";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
const Camera = () => {
  return (
    <>
      <PerspectiveCamera position={[2, 2, 10]} fov={30} makeDefault />
      {/*
          This lets you rotate the camera.
          We've associated our React ref with it
          like we would do for any React component
        */}
      <OrbitControls />
    </>
  );
};

export default Camera;
