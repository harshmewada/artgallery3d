import React, { useState } from "react";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import { useThree, useFrame } from "@react-three/fiber";
import {
  a,
  useSpring,
  config,
  animated,
  useTransition,
} from "@react-spring/three";
import { useFrame } from "@react-three/fiber";

function MyRotatingBox() {
  const myMesh = React.useRef();
  const [active, setActive] = useState(false);
  const [show, set] = useState(false);
  const { opacity } = useSpring({
    loop: false,
    from: { opacity: 0 },

    to: [{ opacity: 1 }],
  });
  return (
    <animated.mesh
      position={[0, 3, 0]}
      scale={opacity.to({ range: [0.0, 1.0], output: [1, 5] })}
      onClick={() => setActive(!active)}
      ref={myMesh}
    >
      <boxBufferGeometry />
      <meshPhongMaterial color="royalblue" />
    </animated.mesh>
  );

  // return transitions(
  //   <animated.mesh
  //     scale={scale}
  //     onClick={() => setActive(!active)}
  //     ref={myMesh}
  //   >
  //     <boxBufferGeometry />
  //     <meshPhongMaterial color="royalblue" />
  //   </animated.mesh>
  // );
}
const Camera = () => {
  // useFrame(({ camera }) => {
  //   console.log("camera", camera.position);
  // });
  const defaultPostion = [0, 15, 10];

  // const doorFront = [15, 0, 0];
  const doorBack = [9, 2, -24];
  const { width, height } = window;

  const [active, setActive] = React.useState(false);
  const myCamera = React.useRef();
  const { scale } = useSpring({
    scale: active ? 50 : 20,
  });
  return (
    <>
      <PerspectiveCamera
        position={[0, 5, 70]}
        // aspect={width / height}
        fov={15}
        makeDefault
        ref={myCamera}
      />
      <MyRotatingBox />
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
