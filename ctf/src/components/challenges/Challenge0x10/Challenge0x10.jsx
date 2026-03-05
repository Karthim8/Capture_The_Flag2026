import React from "react";
import "./Challenge10.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x10 = () => {

  const viewImage = () => {
    window.open("/0x10/vic.png", "_blank");
  };

  return (
    <div className="challenge-wrapper">

      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="challenge-center">

        <div className="challenge-card">

          <h1 className="challenge-title">
            0x10 → NATO CIPHER
          </h1>

          <div className="vertical-line"></div>

          <p className="challenge-text">
            Communication systems often rely on standardized phonetic alphabets
            to avoid confusion between similar sounding letters.
          </p>

          <p className="challenge-text hint">
            Somewhere in the transmission lies a hidden message.
            Decode the NATO phonetic alphabet to reveal the flag.
          </p>

          <button className="view-btn" onClick={viewImage}>
            View Image
          </button>

        </div>

      </div>

    </div>
  );
};

export default Challenge0x10;