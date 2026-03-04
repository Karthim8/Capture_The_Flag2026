import React from "react";
import "./Challenge36.css";
import bgVideo from "../video/video bg ctf.mp4"; // Ensure the video path is correct

const Challenge0x36 = () => {
  const handleDownload = () => {
    const fileUrl = "/arcane (1).py"; // Ensure the file is inside the 'public' folder
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "arcane (1).py"; // File will be downloaded with this name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-title">0x36 -&gt; Crack the Arcane Calculator</h1>
        <p className="challenge-description">
          You've stumbled upon a mysterious Python program called the "Arcane Calculator." 
          It seems like a demo version of a cool software, but there's a catch – it's locked!
        </p>
        <button className="challenge-button" onClick={handleDownload}>
          GET THIS PYTHON FILE
        </button>
      </div>
    </div>
  );
};

export default Challenge0x36;
