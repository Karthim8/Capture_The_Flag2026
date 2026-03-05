import React from "react";
import "./Challenge29.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x29 = () => {

  return (
    <div className="challenge-wrapper">

      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">

        <h1 className="challenge-header">0x29 → OSINT Investigation</h1>

        <p className="challenge-instruction">
          Not every secret is hidden inside the application.

          <br /><br />

          Skilled investigators know that valuable information can often be
          discovered through <strong>Open Source Intelligence (OSINT)</strong>.
          Developers sometimes leave traces of information across their public
          digital profiles.

          <br /><br />

          Your mission is to investigate the creator's professional footprint
          and locate the hidden flag.

          <br />

          {/* 🔎 <strong>Hint:</strong> Professional networking platforms often
          reveal more than expected. */}
        </p>

        <a
          href="https://www.linkedin.com/in/aravinth-r-b52b84244"
          target="_blank"
          rel="noopener noreferrer"
          className="challenge-link"
        >
          Investigate the Developer
        </a>

      </div>

    </div>
  );
};

export default Challenge0x29;