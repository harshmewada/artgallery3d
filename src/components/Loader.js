import React from "react";
import { Html, useProgress } from "@react-three/drei";
import { Line, Circle } from "rc-progress";
import ProgressBar from "@ramonak/react-progress-bar";
import useGetArtistName from "../hooks/useGetArtistName";
import { useParams } from "react-router-dom";
function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();

  const artist = useGetArtistName();
  console.log("artist", artist);
  return (
    <Html center>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#424242",
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src="logowhite.png"
          style={{
            height: "20%",
            width: "20%",
            objectFit: "contain",
            marginBottom: 20,
          }}
        />
        <div
          style={{
            color: "white",
            fontFamily: "Roboto",
            fontWeight: 500,
            marginBottom: 50,
          }}
        >
          {artist ? `Loading gallery of ${artist}` : "Hang on! Loading gallery"}
        </div>
        <div style={{ width: 500 }}>
          <ProgressBar
            completed={parseInt(progress)}
            isLabelVisible={false}
            bgColor="#fff"
            width="100%"
            baseBgColor="#5c5756"
          />
        </div>
      </div>
    </Html>
  );
}

export default Loader;
