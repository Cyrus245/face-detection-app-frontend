import React from "react";
import "./ImageLinkForm.css";

function ImageLinkForm({ handleChange, onSubmit }) {
  return (
    <div>
      <p className="f3 tc">
        {"This Magic Brain will detect faces in a picture.Give it a try"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={handleChange}
          ></input>
          <button
            className="w-40 grow f4 link ph3 dib white bg-light-purple"
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
