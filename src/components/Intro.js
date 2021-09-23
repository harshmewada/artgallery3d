import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
function Intro({ start, set }) {
  const [vec] = React.useState(() => new THREE.Vector3());

  // const [styles, api] = useSpring(() => ({ opacity: 1 }));

  React.useEffect(() => setTimeout(() => set(true), 500), []);
  return useFrame((state) => {
    if (start) {
      state.camera.position.lerp(vec.set(0, 3, 14), 0.05);
      // state.camera.lookAt(0, 0, 0);
    }
  });
}

export default Intro;
