import { useTexture } from "@react-three/drei";
import React from "react";
import * as THREE from "three";
const angle = Math.PI / 2;
const wrapCoff = [0.3, 3];

const FramesArray = [
  {
    position: [-40, 8, -33.15],
  },
  {
    position: [-40, 8, -14.85],
  },
  {
    position: [-40, 8, 3.45],
  },
  {
    position: [-40, 8, 21.75],
  },
  {
    position: [-40, 8, 49],
  },
  //   {
  //     position: [0, 0.6, 0],
  //   },
  //   {
  //     position: [0, 8, -7.4],
  //   },
  //   {
  //     position: [0, 8, 7.4],
  //   },
  //   {
  //     position: [0, 8, 0],
  //   },
];

export const Beam = ({ beamGeo, beamMat, ...props }) => {
  return (
    <group position={[0, 0, 0]} rotation={[0, 0, angle]} {...props}>
      <mesh
        geometry={beamGeo}
        material={beamMat}
        castShadow
        receiveShadow
      ></mesh>
    </group>
  );
};

const Windows = () => {
  const beamGeo = new THREE.BoxBufferGeometry(18, 3, 3.2);

  const textures = [
    "textures/beams/1K-brick_wall_14_ambientOcclusion.jpg",
    "textures/beams/1K-brick_wall_14_baseColor.jpg",
    "textures/beams/1K-brick_wall_14_height.jpg",
    "textures/beams/1K-brick_wall_14_normal.jpg",
    "textures/beams/1K-brick_wall_14_roughness.jpg",
  ];

  const [texture1, texture2, texture3, texture4, texture5, texture6] =
    useTexture(textures);
  texture1.wrapS = texture1.wrapT = THREE.RepeatWrapping;
  texture1.repeat.set(wrapCoff[0], wrapCoff[1]);

  texture2.wrapS = texture2.wrapT = THREE.RepeatWrapping;
  texture2.repeat.set(wrapCoff[0], wrapCoff[1]);
  texture2.rotation = -angle;

  texture3.wrapS = texture3.wrapT = THREE.RepeatWrapping;
  texture3.repeat.set(wrapCoff[0], wrapCoff[1]);

  texture4.wrapS = texture4.wrapT = THREE.RepeatWrapping;
  texture4.repeat.set(wrapCoff[0], wrapCoff[1]);

  texture5.wrapS = texture5.wrapT = THREE.RepeatWrapping;
  texture5.repeat.set(wrapCoff[0], wrapCoff[1]);

  const beamMat = new THREE.MeshPhysicalMaterial({
    map: texture2,
    aoMap: texture1,
    // displacementMap: texture3,
    // displacementScale: 0,
    normalMap: texture4,
    roughnessMap: texture5,
    bumpMap: texture2,
    bumpScale: 1,
  });
  return (
    <group>
      {FramesArray.map((i, k) => (
        <Beam position={i.position} beamGeo={beamGeo} beamMat={beamMat} />
      ))}

      {/* <Window position={[-25, 0, -25]} glassArgs={[14.5, 14.5, 0.2]} /> */}
    </group>
  );
};

export default Windows;
