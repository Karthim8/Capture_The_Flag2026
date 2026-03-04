import React from "react";
import "./Challenge22.css"; 
import bgVideo from "../video/video bg ctf.mp4"; // Ensure you have the video file in the correct path

const Challenge0x22 = () => {
  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">Challenge 0x22</h1>
        <p className="challenge-instruction">
          "Not everything is as it seems. Some things are written, but not in the way you expect."
        </p>

        {/* Tricky Flag Hidden in Plain Sight */}
        <p className="hidden-flag">
          U+43 U+52 U+41 U+43 U+4B U+45 U+44 U+7B 
          U+69 U+74 U+73 U+41 U+66 U+6C U+61 U+67 
          U+59 U+75 U+70 U+70 U+44 U+6F U+6E U+74 
          U+61 U+73 U+6B U+7D
        </p>
      </div>
    </div>
  );
};

export default Challenge0x22;
