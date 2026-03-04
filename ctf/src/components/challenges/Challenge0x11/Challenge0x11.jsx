import React from "react";
import "./Challenge11.css";  
import bgVideo from "../video/video bg ctf.mp4"; // Background video

const Challenge0x11 = () => {
  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">0x11 {'-> XOR encoded'}</h1>
        <p className="challenge-instruction">
          The flag is XOR-encoded with a single-byte key.
        </p>

        {/* Download Link */}
        <a href="/files/xor_challenge.txt" download="xor_challenge.txt" className="download-link">
          📥 Download Challenge File
        </a>
      </div>
    </div>
  );
};

export default Challenge0x11;
