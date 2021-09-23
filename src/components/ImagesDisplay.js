import { useHelper, useTexture } from "@react-three/drei";
import React, { Suspense } from "react";
import useGetImages from "../hooks/useGetImages";
import SingleImageFrame from "./SingleImageFrame";
import * as THREE from "three";
import { SpotLightHelper } from "three";
const angle = Math.PI / 2;
const ImagePostions = {
  0: {
    position: [-48, 8, 25],
    rotation: [0, angle, 0],
  },
  1: {
    position: [-48, 8, 8],
    rotation: [0, angle, 0],
  },
  2: {
    position: [-48, 8, -9],
    rotation: [0, angle, 0],
  },
  3: {
    position: [-48, 8, -25],
    rotation: [0, angle, 0],
  },

  4: {
    position: [-27, 8, -39],
    rotation: [0, 0, 0],
  },
  5: {
    position: [-8, 8, -39],
    rotation: [0, 0, 0],
  },
  6: {
    position: [27, 8, -39],
    rotation: [0, 0, 0],
  },
  7: {
    position: [8, 8, -39],
    rotation: [0, 0, 0],
  },
  8: {
    position: [48, 8, 25],

    rotation: [0, angle * 3, 0],
  },
  9: {
    position: [48, 8, 8],
    rotation: [0, angle * 3, 0],
  },
  10: {
    position: [48, 8, -9],
    rotation: [0, angle * 3, 0],
  },
  11: {
    position: [48, 8, -25],
    rotation: [0, angle * 3, 0],
  },
  // 12: {
  //   position: [-2.75, 3, -6],
  //   rotation: [0, angle, 0],
  // },
  // 13: {
  //   position: [-2.75, 3, -1],
  //   rotation: [0, angle, 0],
  // },
  // 14: {
  //   position: [-3.25, 3, -6],
  //   rotation: [0, angle * 3, 0],
  // },
  // 15: {
  //   position: [-3.25, 3, -1],
  //   rotation: [0, angle * 3, 0],
  // },
  // 16: {
  //   position: [-14.57, 3, -6],
  //   rotation: [0, angle, 0],
  // },
  // 17: {
  //   position: [-14.57, 3, -1],
  //   rotation: [0, angle, 0],
  // },
  // 18: {
  //   position: [-15.1, 3, -6],
  //   rotation: [0, angle * 3, 0],
  // },
  // 19: {
  //   position: [-15.1, 3, -1],
  //   rotation: [0, angle * 3, 0],
  // },
  // 14: {
  //   position: [5, 8, 0],
  //   rotation: [0, 0, 0],
  // },
  // 15: {
  //   position: [5, 4, 0],
  //   rotation: [0, 0, 0],
  // },
};

const wrapCoff = 1;

const ImagesDisplay = () => {
  const images = useGetImages();
  const myRefs = React.useRef([]);
  myRefs.current = images.map(
    (element, i) => myRefs.current[i] ?? React.createRef()
  );

  const textures = [
    "textures/frame/Wood029_1K_Color.jpg",

    "textures/frame/Wood029_1K_Displacement.jpg",
    "textures/frame/Wood029_1K_NormalDX.jpg",
    "textures/frame/Wood029_1K_Roughness.jpg",
  ];

  const [texture1, texture2, texture3, texture4] = useTexture(textures);
  texture1.wrapS = texture1.wrapT = THREE.RepeatWrapping;
  texture1.repeat.set(wrapCoff, wrapCoff);

  texture2.wrapS = texture2.wrapT = THREE.RepeatWrapping;
  texture2.repeat.set(wrapCoff, wrapCoff);

  texture3.wrapS = texture3.wrapT = THREE.RepeatWrapping;
  texture3.repeat.set(wrapCoff, wrapCoff);
  const spotLight = React.useRef();

  // useHelper(spotLight, SpotLightHelper, 0.5, "hotpink");
  // console.log("imagesRef", myRefs);
  return images.length > 0 ? (
    <group position={[0, 0, 0]}>
      {images.map((im, i) => {
        const {
          // urls: { regular },
          // src: { large2x: regular },
          sizeData: { width, height },
          imageUrl,
        } = im;
        return (
          ImagePostions[i] && (
            <>
              <SingleImageFrame
                url={imageUrl}
                ref={myRefs.current[i]}
                // url={regular}
                key={i}
                width={width * 0.005}
                height={height * 0.005}
                position={[0, 1, i]}
                frameTextures={[texture1, texture2, texture3, texture4]}
                {...ImagePostions[i]}
              />
            </>
          )
        );
      })}
    </group>
  ) : (
    <group />
  );
};

export default ImagesDisplay;
