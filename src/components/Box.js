import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useCubeTexture, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useControl } from "react-three-gui";
import ColorPicker from "./ColorPicker";
import { Text, Billboard } from "@react-three/drei";
import { a, config } from "@react-spring/three";
import useCubeEnv from "../hooks/useCubeEnv";
const Box = (props) => {
  const ref = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [texture, Bind] = useCubeEnv(256);
  // return (
  //   <mesh>
  //     <Bind />
  //     <sphereBufferGeometry args={[2, 32, 32]} />
  //     <meshBasicMaterial envMap={texture} />
  //   </mesh>
  // );
  // );
  // const envMap = useCubeTexture(
  //   ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
  //   { path: "1hdr/" }
  // );
  // const url = `goldleather.jpg`;
  // const texture = useTexture(url);
  // texture.wrapS = 500;
  // texture.wrapT = 500;
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
  const wrapCoff = [80, 150];

  const textures = [
    "textures/floor/3/1K_storm___polished___marble_ao.png",
    "textures/floor/3/1K_storm___polished___marble_diffuse.png",
    "textures/floor/3/1K_storm___polished___marble_displacement.png",
    "textures/floor/3/1K_storm___polished___marble_normal.png",
    "textures/floor/3/1K_storm___polished___marble_specular.png",
    // "textures/floor/1/1K-woodparquet_16_roughness.jpg",
  ];
  const [texture1, texture2, texture3, texture4, texture5, texture6] = useTexture(textures);
  texture1.wrapS = texture1.wrapT = THREE.RepeatWrapping;
  texture1.repeat.set(wrapCoff[0], wrapCoff[1]);

  texture2.wrapS = texture2.wrapT = THREE.RepeatWrapping;
  texture2.repeat.set(wrapCoff[0], wrapCoff[1]);

  texture3.wrapS = texture3.wrapT = THREE.RepeatWrapping;
  texture3.repeat.set(wrapCoff[0], wrapCoff[1]);

  texture4.wrapS = texture4.wrapT = THREE.RepeatWrapping;
  texture4.repeat.set(wrapCoff[0], wrapCoff[1]);

  texture5.wrapS = texture5.wrapT = THREE.RepeatWrapping;
  texture5.repeat.set(wrapCoff[0], wrapCoff[1]);

  texture1.rotation = -(0.5 * Math.PI);
  console.log('texture', texture);
  return (
    <Suspense fallback={null}>
      <a.mesh
        {...props}
        ref={ref}
      // scale={active ? 1.5 : 1}
      // onClick={(event) => setActive(!active)}
      // onPointerOver={(event) => setHover(true)}
      // onPointerOut={(event) => setHover(false)}
      >
        <Bind />
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial
          roughness={1}
          envMapIntensity={0.9}
          metalness={0}
          color="white"
          refractionRatio={0.7}
          clearcoat
          transmission={0.95}
          opacity={1}
          reflectivity={0.2}
          // map={texture1}
          envMap={texture}
        />

        {/* <meshStandardMaterial
        // reflectivity={1}
        roughness={0}
        // shininess={10}
        // reflectivity={1}
        // refractionRatio={1}
        metalness={0}
        // normalMap={normalMap2}
        // normalScale={new THREE.Vector2(0.15, 0.15)}
        // map={texture}
        // // normalMap={texture}
        // bumpMap={texture}
        // bumpScale={0.1}
        // envMap={texture}
        /> */}
      </a.mesh>
    </Suspense>
  );
};

export default Box;
