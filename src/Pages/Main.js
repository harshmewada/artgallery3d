import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Box from "../components/Box";
import Camera from "../components/Camera";
import {
  ACESFilmicToneMapping,
  sRGBEncoding,
  DirectionalLightHelper,
} from "three";
import Light from "../components/Light";
import Environ from "../components/Environ";
import GuiControls from "../components/GuiControls";
import { Physics, useBox, useCompoundBody } from "@react-three/cannon";
import { Player } from "../components/Player";
import { withControls, Controls } from "react-three-gui";
import Intro from "../components/Intro";
import { Stats, PointerLockControls } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  SSAO,
  SMAA,
  Sepia,
  GodRays,
  Noise,
  ToneMapping,
} from "@react-three/postprocessing";
import {
  KernelSize,
  Resizer,
  BlendFunction,
  SMAAPreset,
  EdgeDetectionMode,
} from "postprocessing";
import ArtGallery from "../components/ArtGalleryModel";
import ModelCompound from "../components/ModelCompound";
import ImagesDisplay from "../components/ImagesDisplay";
import Loader from "../components/Loader";
import Overlay from "../components/OverlayButtons";
import { useHistory, useParams } from "react-router-dom";
// import ArtGallery from "../components/Scene";

import Room from "../components/Room/index";
import Floor from "../components/Room/Floor";

const Main = () => {
  const YourCanvas = withControls(Canvas);
  const [ready, setReady] = React.useState(false);

  return (
    <div>
      <YourCanvas
        shadowMap
        frameloop="demand"
        mode="concurrent"
        shadows={true}
        style={{ height: "100vh", width: "100vw" }}
        colorManagement
        sRGB={true}
        autoClear={true}
        performance={{
          min: 0.5,
          current: 1,
          max: 1,
          debounce: 200,
        }}
        gl={{
          outputEncoding: sRGBEncoding,
          toneMapping: ACESFilmicToneMapping,
          toneMappingExposure: 1,
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
        }}
      >
        <PointerLockControls />

        <Suspense fallback={<Loader />}>
          {/* <Camera /> */}
          <Environ />
          <Physics gravity={[0, -30, 0]}>
            {/* <Floor /> */}
            {/* {'it is important room'} */}

            <Room />

            <ModelCompound position={[0, 1, -4.8]} />

            {/* <Cube position={[0, 1.6, -10]} />
          <Cubes position={[0, 1.6, -10]} /> */}
            {/* <ArtGallery position={[0, 0, 0]} rotation={[0, Math.PI, 0]} /> */}

            <Player />
          </Physics>
          {/* <Box position={[0, 2, 0]} /> */}

          <Light />
          <ImagesDisplay />
          {/* <Intro start={ready} set={setReady} /> */}
          {/* <Room /> */}
          {/* <Floor /> */}
          {/* <Effects /> */}

          <Stats />
        </Suspense>
      </YourCanvas>
    </div>
  );
};

export default function Doha() {
  return (
    <Controls.Provider>
      <Main />
      <Controls />
    </Controls.Provider>
  );
}
