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
        Communication is key, yet sometimes it's hidden in plain sight.Pulse Patterns may seem random, but only those who listen closely will hear the signal through the noise. Decode what’s written below, but be warned—some things are not as they appear!!
        </p>
        <p className="challenge-morse">
          -.-. .-. .- -.-. -.- . -.. # .-. .. -.-. -.- .- -. -.. -- --- .-. - -.-- .. ... - .... . -... . ... - #
        </p>
      </div>
    </div>
  );
};

export default Challenge0x20;
