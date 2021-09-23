import React from "react";

const ArtGalleryModel = () => {
  return <group></group>;
};

export default ArtGalleryModel;

// import React, { Suspense, useRef, useState } from "react";
// import * as THREE from "three";
// // import { useLoader } from '@react-three/fiber'
// // import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import {
//   useGLTF,
//   useTexture,
//   useHelper,
//   MeshDistortMaterial,
//   Detailed,
//   Preload,
// } from "@react-three/drei";
// import { a } from "@react-spring/three";
// import useCubeEnv from "../hooks/useCubeEnv";
// import {
//   DirectionalLightHelper,
//   DirectionalLight,
//   BackSide,
//   FrontSide,
// } from "three";
// import UWP from "./UWP";
// import { FlakesTexture } from "three-stdlib";
// import Box from "./Box";
// import { DoubleSide } from "three";
// import Loader from "./Loader";
// const ArtGallery = (props) => {
//   const galleryRef = React.useRef();
//   const [cubeTexture, Bind] = useCubeEnv(256);
//   const gltf = useGLTF("Models/newscene.gltf");
//   const { nodes, materials } = gltf;
//   // console.log("nodes", nodes, nodes.Scene.children);

//   // const floorTexturesList = [
//   //     'Models/textures/1K-wood_plank_10-ao.jpg',
//   //     'Models/textures/1K-wood_plank_10-displacement.jpg',
//   // ];

//   // const floorTextures = useTexture(floorTexturesList);
//   // const [floortexture1, floortexture2,] = wallTextures
//   // floortexture1.wrapS = floortexture1.wrapT = THREE.RepeatWrapping;
//   // floortexture1.repeat.set(1000, 1000);
//   // floortexture2.wrapS = floortexture2.wrapT = THREE.RepeatWrapping;
//   // floortexture2.repeat.set(500, 500);
//   // const listOfTextures = {
//   //     wallTextures,
//   //     // floorTextures,
//   // };

//   const renderMaterial = (data) => {
//     // const texturesData = data?.texturesData;

//     // let currentTexture = listOfTextures[texturesData?.textureName]?.map((t) => {
//     //     if (texturesData.wrap) {
//     //         t.wrapS = t.wrapT = THREE.RepeatWrapping;
//     //         t.repeat.set(texturesData.wrap[0], texturesData.wrap[1]);
//     //     }

//     //     return t;
//     // });
//     const newData = {
//       ...data,
//       side: DoubleSide,
//       envMap: cubeTexture,
//       // ...(currentTexture && {
//       //     map: currentTexture[texturesData?.map],
//       //     roughnessMap: currentTexture[texturesData?.roughnessMap],
//       //     specularIntensityMap: currentTexture[texturesData?.roughnessMap],
//       //     displacementMap: currentTexture[texturesData?.displacementMap],
//       //     aoMap: currentTexture[texturesData?.aoMap],
//       //     metalnessMap: currentTexture[texturesData?.metalnessMap],
//       //     opacity: currentTexture[texturesData?.opacity],
//       //     normalMap: currentTexture[texturesData?.normalMap],
//       //     specularMap: currentTexture[texturesData?.specularMap],
//       //     normalMap: texture,
//       //     // envMap: cubeTexture,
//       //     combine: 0,
//       //     displacementMap: currentTexture[texturesData?.displacementMap],
//       // }),
//     };
//     // if (data.material == 'standard') {
//     //     return new THREE.MeshStandardMaterial({
//     //         ...newData
//     //     });
//     // } else if (data.material == 'phong') {
//     //     return new THREE.MeshPhongMaterial({
//     //         ...newData
//     //     });
//     // } else if (data.material == 'physical') {
//     //     return new THREE.MeshPhysicalMaterial({
//     //         ...newData
//     //     });
//     // } else

//     if (data.glassShadow) {
//       return new THREE.MeshPhysicalMaterial({
//         metalness: 0.9,
//         roughness: 0.05,
//         envMapIntensity: 0.9,
//         clearcoat: 1,
//         transparent: true,
//         // transmission: .95,
//         opacity: 0.6,
//         reflectivity: 0.2,
//         refractionRatio: 0.985,
//         ior: 0.9,
//       });
//     } else {
//       return new THREE.MeshBasicMaterial({
//         ...newData,
//       });
//     }
//   };

//   const RenderNode = ({ data, material }) => {
//     // console.log("rendernode");
//     if (data.name == "Plane") {
//       data.rotation.y = Math.PI;
//       data.material.color = new THREE.Color("0x4287f5");
//       // data.material.aoMap = floortexture1
//     }
//     if (data.name == "Plane001") {
//       data.rotation.y = Math.PI;
//       // data.material.aoMap = floortexture1
//     }

//     if (data.name == "Cube") {
//       // data.material.bumpMap = texture1
//       data.material.clipIntersection = true;
//       data.material.clipShadows = true;
//       data.material.bumpScale = 0.005;
//     }
//     if (data.name == "Cube001") {
//       // data.material.bumpMap = texture3
//       data.material.bumpScale = 0.05;
//     }
//     if (data.name == "Plane003") {
//       data.glassShadow = true;
//     }
//     if (data.name == "Plane004") {
//       data.glassShadow = true;
//     }
//     if (data.name == "Cube009") {
//       data.glassShadow = true;
//     }

//     return (
//       <mesh
//         geometry={data.geometry}
//         material={
//           material
//             ? material
//             : UWP[data?.name]
//             ? renderMaterial(UWP[data?.name])
//             : data.material
//         }
//         // material={data.material}
//         position={data.position}
//         rotation={data.rotation}
//         scale={data.scale}
//         castShadow={data.glassShadow ? false : true}
//         receiveShadow
//       >
//         {data.children.map((c, i) => {
//           let mat;
//           if (UWP[data?.name] && UWP[data?.name]?.applyToChild === true) {
//             mat = renderMaterial(UWP[data?.name]);
//           }
//           return <RenderNode data={c} material={mat} />;
//         })}
//       </mesh>
//     );
//   };
//   return (
//     <Suspense fallback={<Loader />}>
//       <group
//         position={[0, 5, 0]}
//         ref={galleryRef}
//         {...props}
//         scale={0.6}
//         castShadow
//         receiveShadow
//       >
//         <Bind />
//         {nodes.Scene && <RenderNode data={nodes.Scene} />}
//       </group>
//     </Suspense>
//   );
// };

// export default ArtGallery;
