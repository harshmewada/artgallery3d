import React, { Suspense } from "react";
import {
  OrbitControls,
  Environment,
  Plane,
  Reflector,
} from "@react-three/drei";
import Floor from "./Floor";
const Environ = () => {
  return (
    <>
      <color attach="background" args={["#F2CFC2"]} />
      <Suspense fallback={null}>
        <Environment preset="night" />
        <Floor />
      </Suspense>
    </>
  );
};

export default Environ;
