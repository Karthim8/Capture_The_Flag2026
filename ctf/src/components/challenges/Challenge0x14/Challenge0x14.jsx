import React from "react";
import "./Challenge14.css"; 
import bgVideo from "../video/video bg ctf.mp4"; // Ensure you have the video file in the correct path

const Challenge0x14 = () => {
  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">0x14 {"->"} Bacon</h1>
        <p className="challenge-instruction">
          Some messages are loud, but the real truth whispers beneath the noise.  
          The ancient method of hidden words relies on **two-faced letters**,  
          where one form tells a story, and the other hides the secret.  
          Look deeper, for the pattern will guide you to what remains unseen.<br />  
        </p>

        <p className="challenge-cipher">
          {"bbbababbbabbbbbbbbabbababbbabbbbbaa{bbbababbbababbbabbabbaaaaaabbbbbbba"} <br/> {"bbbbbbbbabbaaabbaababbbabbabbbbaaaabbaaabbabbabbba}"}
        </p>

        <p className="challenge-instruction">
          Can you decode the disguise and unveil the truth?  
          The key is hidden within the shadows of two.
        </p>
      </div>
    </div>
  );
};

export default Challenge0x14;
