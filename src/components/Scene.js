/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import useCubeEnv from "../hooks/useCubeEnv";
import { DoubleSide } from "three";

import {
  OrbitControls,
  Environment,
  Plane,
  Reflector,
  useTexture,
  Box,
  CubeCamera,
} from "@react-three/drei";
const wrapCoff = [50, 50];
const benchWrapCoff = [50, 50];
const wallwrapCoff = [100, 100];

export default function Model(props) {
  const group = useRef();
  const [texture, Bind] = useCubeEnv(256);

  const { nodes, materials } = useGLTF("Models/scene.gltf");
  console.log("nodes", nodes, materials);

  const floorTextures = [
    "textures/floor/2/2_diff_4k.jpg",
    "textures/floor/2/2_disp_4k.png",
    // "textures/floor/2/2_nor_gl_4k.exr",
    "textures/floor/2/2_rough_4k.jpg",
  ];
  const [floorTexture1, floorTexture2, floorTexture3, floorTexture4] =
    useTexture(floorTextures);
  floorTexture1.wrapS = floorTexture1.wrapT = THREE.RepeatWrapping;
  floorTexture1.repeat.set(wrapCoff[0], wrapCoff[1]);

  floorTexture2.wrapS = floorTexture2.wrapT = THREE.RepeatWrapping;
  floorTexture2.repeat.set(wrapCoff[0], wrapCoff[1]);

  floorTexture3.wrapS = floorTexture3.wrapT = THREE.RepeatWrapping;
  floorTexture3.repeat.set(wrapCoff[0], wrapCoff[1]);

  // const wallTextures = [
  //   "textures/wall/Concrete025_1K_Color.jpg",
  //   "textures/wall/Concrete025_1K_Displacement.jpg",
  //   "textures/wall/Concrete025_1K_NormalDX.jpg",

  //   "textures/wall/Concrete025_1K_NormalGL.jpg",

  //   "textures/wall/Concrete025_1K_Roughness.jpg",
  // ];

  const wallTextures = [
    "textures/wall/1/1K-plaster_brown-ao.jpg",
    "textures/wall/1/1K-plaster_brown-diffuse.jpg",
    "textures/wall/1/1K-plaster_brown-displacement.jpg",
    "textures/wall/1/1K-plaster_brown-normal.jpg",
    "textures/wall/1/1K-plaster_brown-specular.jpg",

  ];
  const [wallTexture1, wallTexture2, wallTexture3, wallTexture4, wallTexture5] =
    useTexture(wallTextures);
  wallTexture1.wrapS = wallTexture1.wrapT = THREE.RepeatWrapping;
  wallTexture1.repeat.set(wallwrapCoff[0], wallwrapCoff[1]);

  wallTexture2.wrapS = wallTexture2.wrapT = THREE.RepeatWrapping;
  wallTexture2.repeat.set(wallwrapCoff[0], wallwrapCoff[1]);

  wallTexture3.wrapS = wallTexture3.wrapT = THREE.RepeatWrapping;
  wallTexture3.repeat.set(wallwrapCoff[0], wallwrapCoff[1]);
  wallTexture4.wrapS = wallTexture4.wrapT = THREE.RepeatWrapping;
  wallTexture4.repeat.set(wallwrapCoff[0], wallwrapCoff[1]);
  wallTexture5.wrapS = wallTexture5.wrapT = THREE.RepeatWrapping;
  wallTexture5.repeat.set(wallwrapCoff[0], wallwrapCoff[1]);

  const DoorMaterial = new THREE.MeshPhysicalMaterial({
    roughness: 0.1,
    metalness: 0.5,
    side: DoubleSide,
  });

  const DoorHandleMaterial = new THREE.MeshPhysicalMaterial({
    roughness: 0.1,
    metalness: 0.8,
    color: "yellow",
  });

  // const BenchMaterial = new THREE.MeshPhysicalMaterial({
  //   roughness: 0,
  //   metalness: 1,
  // });
  const BashBoardMaterial = new THREE.MeshBasicMaterial({
    roughness: 1,
    color: '#fff',
    metalness: 0,
    // map: texture2,
    // aoMap: texture1,
    // roughnessMap: texture6,
    // displacementMap: texture3,
    // normalMap: texture5,
    // metalnessMap: texture4,
  });
  const BenchMaterial = new THREE.MeshPhysicalMaterial({
    roughness: 0,
    metalness: 1,
    // map: texture2,
    // aoMap: texture1,
    // roughnessMap: texture6,
    // displacementMap: texture3,
    // normalMap: texture5,
    // metalnessMap: texture4,
  });

  const FloorMaterial = new THREE.MeshPhysicalMaterial({
    color: "#ffcda3",
    map: floorTexture1,
    displacementMap: floorTexture2,
    roughnessMap: floorTexture3,
  });

  const WallMaterial = new THREE.MeshPhysicalMaterial({
    // displacementMap: wallTexture2,
    // map: wallTexture1,
    // // displacementMap: wallTexture2,
    // normalMap: wallTexture3,
    // side: DoubleSide,
    // roughnessMap: wallTexture5,

    map: wallTexture2,
    aoMap: wallTexture1,
    // displacementMap: wallTexture3,
    normalMap: wallTexture2,
    side: DoubleSide,
    specularIntensityMap: wallTexture4,
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* door */}
      <group position={[5, 0, -11.78]}>
        <mesh castShadow geometry={nodes.DoorFrame.geometry}>
          <mesh
            castShadow
            geometry={nodes.Door.geometry}
            material={DoorMaterial}
            position={[-0.81, 1.08, 0.05]}
          >
            <mesh
              castShadow
              geometry={nodes.Handle_Back.geometry}
              material={DoorHandleMaterial}
              position={[0.73, 0, 0]}
            />
            <mesh
              castShadow
              geometry={nodes.Handle_Front.geometry}
              material={DoorHandleMaterial}
              position={[0.73, 0, -0.07]}
              rotation={[-Math.PI, 0, 0]}
            />
          </mesh>
          <mesh
            castShadow
            geometry={nodes.Door001.geometry}
            material={DoorMaterial}
            position={[0.81, 1.08, 0.05]}
          >
            <mesh
              castShadow
              geometry={nodes.Handle_Back001.geometry}
              material={DoorHandleMaterial}
              position={[-0.73, 0, 0]}
            />
            <mesh
              castShadow
              geometry={nodes.Handle_Front001.geometry}
              material={DoorHandleMaterial}
              position={[-0.73, 0, -0.07]}
              rotation={[-Math.PI, 0, 0]}
            />
          </mesh>
        </mesh>
      </group>
      {/* walls */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room.geometry}
        material={WallMaterial}
        position={[4.99, 0, -5.02]}
        scale={[1.44, 1, 1.36]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Baseboard.geometry}
          material={BashBoardMaterial}
          position={[-5, 0, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ceiling.geometry}
          material={WallMaterial}
          position={[-5, 0, 5]}
        />
      </mesh>
      {/* <mesh
          castShadow
          
          geometry={nodes.Floor.geometry}
          material={FloorMaterial}
          position={[-5, 0, 5]}
        /> */}
      {/* ceiling top decoration */}
      <mesh
        castShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[5.07, 2.9, -4.88]}
        rotation={[0, 0, -1.57]}
        scale={[0.1, 2.3, 2.12]}
      >
        <mesh
          castShadow
          geometry={nodes.Plane001.geometry}
          material={nodes.Plane001.material}
          position={[0, 0.21, 0]}
        />
        <mesh
          castShadow
          geometry={nodes.Plane002.geometry}
          material={nodes.Plane002.material}
          position={[0, 0.41, 0]}
        />
        <mesh
          castShadow
          geometry={nodes.Plane003.geometry}
          material={nodes.Plane003.material}
          position={[0, 0.59, 0]}
        />
        <mesh
          castShadow
          geometry={nodes.Plane004.geometry}
          material={nodes.Plane004.material}
          position={[0, 0.78, 0]}
        />
        <mesh
          castShadow
          geometry={nodes.Plane005.geometry}
          material={nodes.Plane005.material}
          position={[0, -0.23, 0]}
        />
        <mesh
          castShadow
          geometry={nodes.Plane006.geometry}
          material={nodes.Plane006.material}
          position={[0, -0.43, 0]}
        />
        <mesh
          castShadow
          geometry={nodes.Plane007.geometry}
          material={nodes.Plane007.material}
          position={[0, -0.6, 0]}
        />
        <mesh
          castShadow
          geometry={nodes.Plane008.geometry}
          material={nodes.Plane008.material}
          position={[0, -0.79, 0]}
        />
      </mesh>

      {/* bench right */}
      <mesh
        castShadow
        geometry={nodes.Cube.geometry}
        material={BenchMaterial}
        position={[9.8, 0.2, -5.75]}
        scale={[0.2, 0.19, 0.09]}
      >
        <mesh
          castShadow
          geometry={nodes.Cube001.geometry}
          material={BenchMaterial}
          position={[0, 0, 20.35]}
        />
        <mesh
          castShadow
          geometry={nodes.Cube002.geometry}
          material={BenchMaterial}
          position={[0, 0, 20.35]}
        />
        <mesh
          castShadow
          geometry={nodes.Plane009.geometry}
          material={BenchMaterial}
          position={[0.49, 1.12, 10.05]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.12, 1.49, 10.97]}
        >
          <mesh
            castShadow
            geometry={nodes.Plane010.geometry}
            material={BenchMaterial}
            position={[0, 0.13, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Plane011.geometry}
            material={BenchMaterial}
            position={[0, 0.29, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Plane012.geometry}
            material={BenchMaterial}
            position={[0, -0.15, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Plane013.geometry}
            material={BenchMaterial}
            position={[0, -0.29, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Plane014.geometry}
            material={BenchMaterial}
            position={[0, -0.42, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Plane015.geometry}
            material={BenchMaterial}
            position={[0, -0.56, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Plane016.geometry}
            material={BenchMaterial}
            position={[0, -0.7, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Plane017.geometry}
            material={BenchMaterial}
            position={[0, -0.84, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Plane018.geometry}
            material={BenchMaterial}
            position={[0, -0.98, 0]}
          />
        </mesh>
        <mesh
          castShadow
          geometry={nodes.Plane019.geometry}
          material={BenchMaterial}
          position={[0.49, 1.12, 10.05]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.12, 1.49, 10.97]}
        >
          <mesh
            castShadow
            geometry={nodes.Plane020.geometry}
            material={BenchMaterial}
            position={[0, -0.98, 0]}
          />
        </mesh>
      </mesh>

      {/* {bench left} */}
      <mesh
        castShadow
        geometry={nodes.Cube003.geometry}
        material={BenchMaterial}
        position={[0.24, 0.2, -5.75]}
        scale={[0.2, 0.19, 0.09]}
      >
        <mesh
          castShadow
          geometry={nodes.Cube004_1.geometry}
          material={BenchMaterial}
          position={[0, 0, 20.35]}
        />
        <mesh
          castShadow
          geometry={nodes.Plane021.geometry}
          material={BenchMaterial}
          position={[0.49, 1.12, 10.05]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.12, 1.49, 10.97]}
        >
          <mesh
            castShadow
            geometry={nodes.Plane022.geometry}
            material={BenchMaterial}
            position={[0, 0.13, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Plane023.geometry}
            material={BenchMaterial}
            position={[0, 0.29, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Plane024.geometry}
            material={BenchMaterial}
            position={[0, -0.15, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Plane025.geometry}
            material={BenchMaterial}
            position={[0, -0.29, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Plane026.geometry}
            material={BenchMaterial}
            position={[0, -0.42, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Plane027.geometry}
            material={BenchMaterial}
            position={[0, -0.56, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Plane028.geometry}
            material={BenchMaterial}
            position={[0, -0.7, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Plane029.geometry}
            material={BenchMaterial}
            position={[0, -0.84, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Plane030.geometry}
            material={BenchMaterial}
            position={[0, -0.98, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Plane031.geometry}
            material={BenchMaterial}
            position={[0, -0.98, 0]}
          />
        </mesh>
      </mesh>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
