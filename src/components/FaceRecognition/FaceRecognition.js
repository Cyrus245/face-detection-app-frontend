import React from "react";
import "./FaceRecognition.css";

function FaceRecognition({ imageUrl, box }) {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputImage" src={imageUrl} width="500px" height="auto"></img>
        <div
          className="bounding_box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
}

export default FaceRecognition;