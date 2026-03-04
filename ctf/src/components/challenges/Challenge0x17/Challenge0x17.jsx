import React from "react";
import "./Challenge17.css";
import bgVideo from "../video/video bg ctf.mp4"; // Ensure the video exists in the correct path

const Challenge0x17 = () => {
  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">0x17 {'-> malware'}</h1>
        <p className="challenge-instruction">
          A massive cyberattack disrupted some systems worldwide. The attackers demanded ransom payments in Bitcoin 3b6843ea375d6d6dd4383191df79e284ea3f981b7a69383f8e23d3398bd67b05bf5c18401d50d06ef2f403ed5075c338What is the name of this malware?
          Flag format : CRACKED{'{Malwarename}'} firstletter should be uppercase rest will be lowercase.
        </p>
      </div>
    </div>
  );
};

export default Challenge0x17;