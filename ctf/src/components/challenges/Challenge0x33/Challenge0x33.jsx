import React from "react";
import "./Challenge33.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x33 = () => {

  const downloadArcane = () => {
    const link = document.createElement("a");
    link.href = "/Challenge0x33/Arcane.py";
    link.download = "Arcane.py";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="challenge-wrapper">

      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">

        <h1 className="challenge-header">
          0x17 {'-> Crack the Arcane Calculator'}
        </h1>

        <p className="challenge-instruction">
          A mysterious calculator hidden in the stars holds the key to the flag.
          Download the Python script, analyze the logic carefully,
          and recover the hidden flag.
        </p>

        {/* Download Button */}
        <div className="download-container">
          <button className="download-btn" onClick={downloadArcane}>
            Download Arcane.py
          </button>
        </div>

      </div>
    </div>
  );
};

export default Challenge0x33;