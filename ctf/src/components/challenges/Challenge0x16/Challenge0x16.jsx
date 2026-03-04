import React from "react";
import "./Challenge16.css"; 
import bgVideo from "../video/video bg ctf.mp4"; // Ensure you have the video file in the correct path

const Challenge0x16 = () => {
  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">0x16 {"->"} Black</h1>
        <p className="challenge-instruction">
          The truth is hidden in the shadows. Can you uncover it?
        </p>

        {/* Download Button for the Hidden PDF */}
        <a href="/black.pdf" download className="download-button">
          Download Challenge File
        </a>
      </div>
    </div>
  );
};

export default Challenge0x16;
