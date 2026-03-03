import React from "react";
import "./Challenge1.css";  
import bgVideo from "../video/video bg ctf.mp4"; // Ensure you have the video file in the correct path
//import qrImage from "/images/qrcode.png"; // Ensure the correct path

const Challenge0x01 = () => { 
  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">0x01 {'-> Scan Me'}</h1> 
        {/* <p className="challenge-instruction">Scan Me....</p> */}

        {/* QR Code */}
        <div className="qr-code-container">
          <img 
            src="/images/qrcode.jpeg"
            alt="Scan the QR Code" 
            className="qr-code"
          />
        </div>
      </div>
    </div>
  );
};

export default Challenge0x01;
