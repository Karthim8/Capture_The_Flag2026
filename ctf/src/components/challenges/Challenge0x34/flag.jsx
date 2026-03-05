import React from "react";
import "./Challenge34.css";
import bgVideo from "../video/video bg ctf.mp4";

const Flag = () => {
  return (
    <div className="challenge-wrapper">
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="challenge-content">
        <h1 className="challenge-header">Access Granted</h1>
        <p className="challenge-instruction">
          {"CRACKED{YouAreADigitalMiner}"}
        </p>
      </div>
    </div>
  );
};

export default Flag;