import React, { Suspense } from "react";
import { DoubleSide, MeshPhongMaterial } from "three";
import {
  OrbitControls,
  Environment,
  Plane,
  Reflector,
  useTexture,
  Box,
  CubeCamera,
} from "@react-three/drei";
import useCubeEnv from "../../hooks/useCubeEnv";
import * as THREE from "three";
import { usePlane } from "@react-three/cannon";
import { Window } from "./Window";
import GoldStripe from "./GoldStripe";
const { PI, sin, cos } = Math;
const PlaneSize = [80, 100];
const HoleSize = [10, 10];

const Rotation = [-PI * 0.5, 0, 0];
const wrapCoff = [6, 6];

const angle = Math.PI / 2;
const defaultArgs = [22, 0.5, 0.5];
const FramesArray = [
  {
    position: [-0, 20.8, 0],
    args: defaultArgs,
    rotation: [0, angle, 0],
    type: "height",
    posType: "left",
  },
  {
    position: [0, -0.6, 0],
    args: defaultArgs,

    rotation: [0, angle, 0],
    type: "height",
    posType: "right",
  },
  {
    position: [0, 13.2, 0],
    args: defaultArgs,
    rotation: [0, angle, 0],
  },
  {
    position: [0, 6.7, 0],
    args: defaultArgs,

    rotation: [0, angle, 0],
    type: "height",
    posType: "right",
  },
  {
    // position: [0, 0.2, 6],
    position: [0, 10, -11],
    args: defaultArgs,

    rotation: [0, 0, angle],
    type: "width",
    posType: "bottom",
  },
  {
    // position: [6.2, 0.2, -0.1],
    position: [0, 10, 11],
    args: defaultArgs,

    rotation: [0, 0, angle],
    type: "width",
    posType: "top",
  },
  {
    // position: [6.2, 0.2, -0.1],
    position: [0, 10, 0],
    args: defaultArgs,

    rotation: [0, 0, angle],
    type: "width",
    posType: "top",
  },
];
const Floor = (props) => {
  // const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));

  // const textures = [
  //   "textures/floor/1K-wood_plank_10-ao.jpg",
  //   "textures/floor/1K-wood_plank_10-diffuse.jpg",
  //   "textures/floor/1K-wood_plank_10-displacement.jpg",
  //   "textures/floor/1K-wood_plank_10-normal.jpg",
  //   "textures/floor/1K-wood_plank_10-specular.jpg",
  // ];

  // const [texture1, texture2, texture3, texture4, texture5, texture6] =
  //   useTexture(textures);
  // texture1.wrapS = texture1.wrapT = THREE.RepeatWrapping;
  // texture1.repeat.set(wrapCoff[0], wrapCoff[1]);

  // texture2.wrapS = texture2.wrapT = THREE.RepeatWrapping;
  // texture2.repeat.set(wrapCoff[0], wrapCoff[1]);

  // texture3.wrapS = texture3.wrapT = THREE.RepeatWrapping;
  // texture3.repeat.set(wrapCoff[0], wrapCoff[1]);

  // texture4.wrapS = texture4.wrapT = THREE.RepeatWrapping;
  // texture4.repeat.set(wrapCoff[0], wrapCoff[1]);

  // texture5.wrapS = texture5.wrapT = THREE.RepeatWrapping;
  // texture5.repeat.set(wrapCoff[0], wrapCoff[1]);

  let geometry = new THREE.BoxBufferGeometry(PlaneSize[0], PlaneSize[1]);
  // var points = [
  //   new THREE.Vector2(PlaneSize[0], PlaneSize[1]),
  //   new THREE.Vector2(PlaneSize[0], -PlaneSize[1]),
  //   new THREE.Vector2(-PlaneSize[0], -PlaneSize[1]),
  //   new THREE.Vector2(-PlaneSize[0], PlaneSize[1]),
  // ];
  // var geometry = new THREE.Shape(points);

  // var hole = [
  //   new THREE.Vector2(HoleSize[0], HoleSize[1]),
  //   new THREE.Vector2(HoleSize[0], -HoleSize[1]),
  //   new THREE.Vector2(-HoleSize[0], -HoleSize[1]),
  //   new THREE.Vector2(-HoleSize[0], HoleSize[1]),
  // ];
  // geometry.holes.push(new THREE.Path(hole));
  return (
    <>
      <GoldStripe />
      <mesh
        castShadow
        receiveShadow
        geometry={geometry}
        rotation={Rotation}
        position={[0, 16, 0]}
      >
        {/* <extrudeGeometry
          name="geometry"
          args={[
            geometry,
            {
              amount: 1,
              bevelEnabled: true,
              bevelSegments: 0,
              steps: 1,
              bevelSize: 1,
              bevelThickness: 1,
            },
          ]}
        /> */}
        <meshPhysicalMaterial
          color="white"
          attach="material"
          side={DoubleSide}
          emissive={"white"}
          emissiveIntensity={0.3}
          // aoMap={texture1}
          // displacementMap={texture3}
          // map={texture2}
          // specularTintMap={texture5}
          // bumpMap={texture3}
          // bumpScale={0.2}
          // // metalness={0.8}
          // // roughness={0.5}
          // clearcoat
          // clearcoatRoughness={0.2}
        />
      </mesh>
    </>
  );
};

export default Floor;
