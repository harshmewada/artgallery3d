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

const { PI, sin, cos } = Math;
const PlaneSize = [80, 100];
const Rotation = [-PI * 0.5, 0, 0];
const wrapCoff = [6, 6];
const Floor = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));

  const textures = [
    "textures/floor/1K-wood_plank_10-ao.jpg",
    "textures/floor/1K-wood_plank_10-diffuse.jpg",
    "textures/floor/1K-wood_plank_10-displacement.jpg",
    "textures/floor/1K-wood_plank_10-normal.jpg",
    "textures/floor/1K-wood_plank_10-specular.jpg",
  ];

  const [texture1, texture2, texture3, texture4, texture5, texture6] =
    useTexture(textures);
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

  // texture1.rotation = -(0.5 * Math.PI);

  // texture6.wrapS = texture6.wrapT = THREE.RepeatWrapping;
  // texture6.repeat.set(wrapCoff, wrapCoff);

  // useFrame(({ gl, scene }) => {
  //   // cubeCamera.current.update(gl, scene);
  // });
  // texture2.wrapS = wrapCoff;
  // texture2.wrapT = wrapCoff;
  // texture3.wrapS = wrapCoff;
  // texture3.wrapT = wrapCoff;

  return (
    <>
      <Suspense fallback={null}>
        {/* <Box /> */}
        <mesh rotation={Rotation} position={[0, 0, 0]} receiveShadow castShadow>
          <boxBufferGeometry args={PlaneSize}></boxBufferGeometry>
          <meshPhysicalMaterial
            color="#BA8C63"
            attach="material"
            aoMap={texture1}
            // displacementMap={texture3}
            map={texture2}
            specularTintMap={texture5}
            bumpMap={texture3}
            bumpScale={0.2}
            // metalness={0.8}
            // roughness={0.5}
            clearcoat
            clearcoatRoughness={0.2}
            // envMap={floorEnv}

            // map={texture2}
            // aoMap={texture1}
            // displacementMap={texture3}
            // normalMap={texture4}
            // specularMap={texture5}
            // envMap={floorEnv}
          />
        </mesh>
      </Suspense>
    </>
  );
};

export default Floor;
