import React from "react";
import "./Challenge19.css";
import bgVideo from "../video/video bg ctf.mp4"; // Ensure the video exists in the correct path

const Challenge0x19 = () => {
  const fileUrl = `${process.env.PUBLIC_URL}/files/challengecode.py`; // Ensure file is in the public folder

  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">0x19 {'->Crack a Simple Keygen'}</h1>
        <p className="challenge-instruction">
          An important file contains hidden information.
        </p>
        
        {/* Flag */}
        <p className="flag-text">Flag Format: CRACKED{'{enter the flag}'}</p>

        {/* Download Button */}
        <div className="download-container">
          <a href={fileUrl} download="encrypted_file.py" className="download-button">
            📥 Download File
          </a>
        </div>
      </div>
    </div>
  );
};

export default Challenge0x19;
