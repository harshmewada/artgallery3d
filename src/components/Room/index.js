import React from "react";
import Floor from "./Floor";
import Walls from "./Walls";
import Ceiling from "./Ceilling";
import Windows from "./Window";
import Beams from "./Beams";
import Kunda from "./Kunda";
import Benches from "./Benches";
import { useSpring, animated } from "@react-spring/three";

const Room = () => {
  const { scale, positionx, rotationY } = useSpring({
    loop: false,
    from: { scale: 0.8, positionx: -100, rotationY: 0 },

    to: { scale: 1, positionx: -30, rotationY: Math.PI / 2 },
    config: {
      duration: 2000,
    },
  });
  return (
    <animated.group
      rotation={[0, Math.PI / 2, 0]}

      // rotation-y={rotationY}
      // position-y={-2}
      // position-z={positionx}
    >
      <Ceiling />
      <Beams />
      <Walls />
      <Floor />
      <Windows />
      {/* <Kunda /> */}
      {/* <Benches /> */}
    </animated.group>
  );
};

export default Room;
