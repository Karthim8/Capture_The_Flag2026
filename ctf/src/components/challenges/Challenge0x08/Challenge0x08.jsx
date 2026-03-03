import React from "react";
import "./Challenge8.css"; 
import bgVideo from "../video/video bg ctf.mp4"; // Ensure you have the video file in the correct path

const Challenge0x08 = () => {
  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">0x08 {"->"} Correcting Bits</h1>
        <p className="challenge-instruction">A wise mathematician once said, "A key too small might just break the door."  
  Can you find the missing piece and unlock the secret?  
  Download the artifact and decrypt its whispers... CRACKED{}</p>
        
        {/* Download Button */}
        <a href="/pgm.c" download className="download-button">
          Download Challenge File
        </a>
      </div>
    </div>
  );
};

export default Challenge0x08;
