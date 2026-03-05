import React from "react";
import "./Challenge20.css"; 
import bgVideo from "../video/video bg ctf.mp4"; // Ensure you have the video file in the correct path

const Challenge0x20 = () => {
  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">0x20 {"->"} Pulse Patterns</h1>
        <p className="challenge-instruction">
 
        </p>
        <p className="challenge-morse">
          -.-. .-. .- -.-. -.- . -.. # .-. .. -.-. -.- .- -. -.. -- --- .-. - -.-- .. ... - .... . -... . ... - #
        </p>
      </div>
    </div>
  );
};

export default Challenge0x20;
