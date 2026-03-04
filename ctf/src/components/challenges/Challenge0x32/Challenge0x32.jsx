import React from "react";
import "./Challenge32.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x32 = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Files1/packet.pcapng"; // Correct path
    link.download = "packet.pcap"; // Force download with a specific name
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
      <button className="back-button" onClick={() => window.history.back()} >Back</button>
      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">0x32 → FIND THE PACKETS ??</h1>
        <p className="challenge-instruction">
          - - - - -  USE Wireshark TO Analyse these packets   - - - - -
        </p>
        <button className="btn btn-danger" onClick={handleDownload}>
          GET THIS Packets File
        </button>
      </div>
      <footer className="footer">@ ByteBuster's Club 2025</footer>
    </div>
  );
};

export default Challenge0x32;
