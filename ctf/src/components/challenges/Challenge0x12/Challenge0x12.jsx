import React from "react";
import "./Challenge12.css"; 
import bgVideo from "../video/video bg ctf.mp4"; // Ensure you have the video file in the correct path

const Challenge0x12 = () => {
  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">0x12 {"->"} Phoneword</h1>
        
        <p className="challenge-instruction">
          The gatekeeper whispers, but only those who understand the binary realm will hear its truth.  
          Somewhere in the sequence **27225330** lies the key.  
          But wait... what about the other fragment **86387539?**  
          Decode it, piece it together, and **unlock the sequence.**
        </p>

        
      </div>
    </div>
  );
};

export default Challenge0x12;
