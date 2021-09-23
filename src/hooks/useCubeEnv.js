import React, { useMemo, useState } from "react";

import { useThree, useFrame } from "@react-three/fiber";
import { RGBFormat, LinearFilter, WebGLCubeRenderTarget } from "three";
import { CubeCamera } from "@react-three/drei";
function useCubeEnv(resolution = 256, near = 1, far = 1000) {
  const [camera, setCamera] = useState(null);
  const { scene, gl } = useThree();
  const fbo = useMemo(
    () =>
      new WebGLCubeRenderTarget(resolution, {
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        format: RGBFormat,
        encoding: gl.outputEncoding,
      }),
    [resolution]
  );
  useFrame(() => camera && camera.update(gl, scene));
  return useMemo(
    () => [
      fbo.texture,
      () => <cubeCamera ref={setCamera} args={[near, far, fbo]} />,
    ],
    [near, far, fbo]
  );
}
export default useCubeEnv;
