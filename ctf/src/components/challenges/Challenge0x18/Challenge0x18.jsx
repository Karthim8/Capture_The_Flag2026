import React from "react";
import "./Challenge18.css"; 
import bgVideo from "../video/video bg ctf.mp4"; // Ensure you have the video file in the correct path

const Challenge0x18 = () => {
  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">0x18 {"->"} Surplus</h1>
        <p className="challenge-instruction">
        The flag is right in front of you, but only the keen-eyed will see its true form:<b> {"CRACKED-$<200b>{<200b>*=this@+<200b>is#<200b>the(<200b>!!flag<200b>}"}</b>
        </p>
      </div>
    </div>
  );
};

export default Challenge0x18;
