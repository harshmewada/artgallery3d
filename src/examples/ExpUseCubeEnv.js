import React, { Suspense, useRef, useState } from "react";

import useCubeEnv from "../hooks/useCubeEnv";
const Box = (props) => {
  const ref = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [texture, Bind] = useCubeEnv(256);
  return (
    <mesh>
      <Bind />
      <sphereBufferGeometry args={[2, 32, 32]} />
      <meshBasicMaterial envMap={texture} />
    </mesh>
  );
};

export default Box;
