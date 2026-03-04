import React from "react";
import "./Challenge5.css";
import bgVideo from "../video/video bg ctf.mp4"; // Ensure you have the video file in the correct path

const Challenge0x05 = () => {
  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">0x05 {'->watch out'}</h1>
        <p className="challenge-instruction">
            This challenge requires careful observe and attention to hidden details. 
            <br />
            The flag may be concealed in unexpected places such as 
            metadata, background visuals, timestamps, encoded text etc.
            <br /> <br />
            Think like a security analyst — question everything you see and hear. 
            Sometimes the smallest detail can lead you to the correct flag.
        </p>
        <a href="https://youtu.be/KDZm4p6Kzfk?si=9mnLEDyVssXigjmg" className="challenge-link" target="_blank" rel="noopener noreferrer">
          Click here to view the related video
        </a>
      </div>
    </div>
  );
};

export default Challenge0x05;