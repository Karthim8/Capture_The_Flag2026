import React from "react";
import "./Challenge4.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x04 = () => {
  const fileName = "flag.png"; // Updated filename without special characters

  // Function to trigger file download
  const downloadFile = () => {
    fetch(`/${fileName}`) // Fetch from public folder
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Error downloading the file:", error));
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
        <h1 className="challenge-header">0x04 {"->"} Enigma Hoist </h1>
        <p className="challenge-instruction">The high seas whisper secrets, but only those who understand the language of flags can uncover them. A simple hoist, a silent wave—messages hidden in plain sight. Can you navigate through the storm of symbols and raise the flag of victory?</p>

        {/* Download Button */}
        <button className="download-btn" onClick={downloadFile}>
          Download Challenge File
        </button>
      </div>
    </div>
  );
};

export default Challenge0x04;
