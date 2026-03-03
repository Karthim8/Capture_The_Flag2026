import React, { useEffect } from "react";
import "./Challenge29.css";
import bgVideo from "../video/video bg ctf.mp4"; // Ensure the video exists in the correct path

const Challenge0x29 = () => {
  useEffect(() => {
    const flag = "CRACKED{HiddenConsoleFlag}";
    console.log("Flag:", flag);
    
    const timer = setTimeout(() => {
      console.clear(); // Clear the console after 3 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header"> 0x29 {'->flag hunt'}</h1>
        <p className="challenge-instruction">
          Something is hidden... 😉
        </p>
      </div>
    </div>
  );
};

export default Challenge0x29;
