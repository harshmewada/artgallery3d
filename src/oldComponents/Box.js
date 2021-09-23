import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useCubeTexture, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useControl } from "react-three-gui";
import ColorPicker from "./ColorPicker";
import { Text, Billboard } from "@react-three/drei";
import { a, config } from "@react-spring/three";

const Box = (props) => {
  const ref = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const envMap = useCubeTexture(
    ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
    { path: "1hdr/" }
  );
  const url = `goldleather.jpg`;
  const texture = useTexture(url);
  texture.wrapS = 500;
  texture.wrapT = 500;
  const color = useControl("Material Color", {
    type: "custom",
    value: "#ffb700",
    component: (props) => <ColorPicker {...props} />,
  });
  const metalness = useControl("metalness Color", {
    type: "custom",
    value: 0.1,

    component: ({ value, setValue }) => (
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="number"
        step="0.1"
        placeholder="hehe"
      />
    ),
  });
  const [definedColor, setDefinedColor] = React.useState(color);
  React.useEffect(() => {
    setDefinedColor(color);
  }, [color]);
  // const normalMap2 = useTexture("textures/water/Water_1_M_Normal.jpg");
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <Suspense fallback={null}>
      <Billboard
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false} // Lock the rotation on the z axis (default=false)
      >
        <Text fontSize={1}>{definedColor}</Text>
      </Billboard>
      <a.mesh
        {...props}
        ref={ref}
        // scale={active ? 1.5 : 1}
        // onClick={(event) => setActive(!active)}
        // onPointerOver={(event) => setHover(true)}
        // onPointerOut={(event) => setHover(false)}
        castShadow
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial
          color={definedColor}
          // reflectivity={1}
          metalness={metalness}
          roughness={0.5}
          clearcoat
          // shininess={10}
          // reflectivity={1}
          // refractionRatio={1}
          // reflectivity={1}
          // metalness={0.5}
          // normalMap={normalMap2}
          // normalScale={new THREE.Vector2(0.15, 0.15)}
          // map={texture}
          // // normalMap={texture}
          // bumpMap={texture}
          // bumpScale={0.1}
          envMap={envMap}
          // map={texture}
        />
      </a.mesh>
    </Suspense>
  );
};

export default Box;
