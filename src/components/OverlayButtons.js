import React from "react";

function Overlay() {
  return (
    <div style={{ position: "absolute", bottom: 20, right: 40 }}>
      <p
        style={{
          flex: "1 1 0%",
          fontSize: 12,
          lineHeight: "1em",
          textAlign: "right",
          color: "black",
        }}
      >
        <a href="https://artcooly.com/" style={{ color: "white" }}>
          Designed by Artcooly.com
        </a>{" "}
      </p>
    </div>
  );
}

export default Overlay;
