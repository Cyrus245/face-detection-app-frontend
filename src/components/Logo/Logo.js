import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";

function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt
        tiltAxis="y"
        tiltMaxAngleY={50}
        glareColor="#ffffff"
        glareMaxOpacity={0.4}
        className="Tilt br2 shadow-1"
        style={{
          height: "150px",
          width: "150px",
        }}
      >
        <div className="TIlt-inner tc">
          <img
            src="https://img.icons8.com/plasticine/344/brain.png"
            alt="logo"
          ></img>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
