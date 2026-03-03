import React from "react";
import "./Challenge34.css";
import bgVideo from "../video/video bg ctf.mp4";

const Flagcopy = () => {
  return (
    <div className="challenge-wrapper">
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="challenge-content">
        <h1 className="challenge-header">Access Denied</h1>
        <p className="challenge-instruction">
          Find the hidden route to access the flag. Not everything is as it seems.
        </p>
      </div>
    </div>
  );
};

export default Flagcopy;