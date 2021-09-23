import React from "react";
import { DoubleSide } from "three";
import {
  OrbitControls,
  Environment,
  Plane,
  Reflector,
} from "@react-three/drei";
const { PI, sin, cos } = Math;
const PlaneSize = [200, 200];
const Rotation = [-PI * 0.5, 0, 0];
const Floor = () => {
  return (
    <>
      <Plane
        rotation={Rotation}
        position={[0, -1, 0]}
        args={PlaneSize}
        receiveShadow
      >
        <meshPhysicalMaterial
          color={"#ffcda3"}
          attach="material"
          transparent={true}
          opacity={0.4}
        />
        {/* <shadowMaterial opacity={0.05} /> */}
      </Plane>

      <Reflector
        rotation={Rotation}
        position={[0, -0.99, 0]}
        args={PlaneSize} // PlaneBufferGeometry arguments
        resolution={1000} // Off-buffer resolution, lower=faster, higher=better quality
        mirror={0.3} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        mixBlur={0.1} // How much blur mixes with surface roughness (default = 0), note that this can affect performance
        mixStrength={0.3} // Strength of the reflections
        depthScale={2} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
        depthToBlurRatioBias={0.1} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
        blur={[1000, 100]}
        minDepthThreshold={0.5}
        maxDepthThreshold={2}
        depthScale={2}
        
      ></Reflector>
      {/* <Reflector
        clipBias={0.1}
        textureWidth={1024}
        textureHeight={1024}
        position={[0, -1, 0]}
        position={[0, -0.99, 0]}
        rotation={Rotation}
        args={PlaneSize}
        mirror={0.5}
      ></Reflector> */}
    </>
  );
  //   return (
  //     <mesh
  //       position={[0, 0, 0]}
  //       rotation={[Math.PI / 2, 0, 0]}
  //       scale={[10, 10, 10]}
  //     >
  //       <planeBufferGeometry />

  //       <meshBasicMaterial color="green" side={DoubleSide} />
  //     </mesh>
  //   );
};

export default Floor;
