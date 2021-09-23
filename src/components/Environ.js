import React, { Suspense } from "react";
import {
  OrbitControls,
  Environment,
  Plane,
  Reflector,
  Sky,
} from "@react-three/drei";
import { useControl } from "react-three-gui";
const options = [
  "sunset",
  "dawn",
  "night",
  "warehouse",
  "forest",
  "apartment",
  "studio",
  "city",
  "park",
  "lobby",
];
const Environ = () => {
  const envBg = useControl("Enviornment", {
    type: "select",
    items: options,
    value: "forest",
    // component: (props) => <CustomSelect {...props} />,
  });
  return (
    <Suspense fallback={null}>
      {/* <Sky
        distance={1000}
        sunPosition={[0, 50, 15000]}
        inclination={0}
        azimuth={180}
        turbidity={8.6}
        rayleigh={2.24}
        mieCoefficient={0.0010}
        mieDirectionalG={0.7}
      /> */}
      {/* <color attach="background" args={"green"} /> */}

      <Environment preset={envBg} background />
    </Suspense>
  );
};

export default Environ;
