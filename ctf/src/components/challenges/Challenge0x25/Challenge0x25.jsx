import React from "react";
import "./Challenge25.css";
import bgVideo from "../video/video bg ctf.mp4"; // Ensure you have the video file in the correct path

const Challenge0x25 = () => {
  const handleDownload = () => {
    const fileUrl = `${process.env.PUBLIC_URL}/files/Folder.zip`; // File Path
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "Folder.zip"); // File name for download
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
        <h1 className="challenge-header">0x25 {'->File la file'}</h1>
        <p className="challenge-instruction">
          Click the button below to download the challenge file.
        </p>

        {/* Download Button */}
        <button className="download-button" onClick={handleDownload}>
          Download Challenge File
        </button>
      </div>
    </div>
  );
};

export default Challenge0x25;
