import React from "react";
import { usePlane } from "@react-three/cannon";

const Floor = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));

  return (
    <group>
      <mesh ref={ref}>
        <boxBufferGeometry args={[80, 100]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  );
};

export default Floor;
