import React from "react";
import "./Challenge23.css";
import bgVideo from "../video/video bg ctf.mp4"; // Ensure the video exists in the correct path

const Challenge0x23 = () => {
  const imageUrl = `${process.env.PUBLIC_URL}/images/encrypted_image.png`;

  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">0x23 {'->Steganography'}</h1>
        <p className="challenge-instruction">
          An important image contains hidden information.
        </p>

        {/* Download Button */}
        <div className="download-container">
          <a href={imageUrl} download="encrypted_image.png" className="download-button">
            📥 Download Image
          </a>
        </div>
      </div>
    </div>
  );
};

export default Challenge0x23;
