import React, { useState } from "react";
import "./Challenge24.css";
// import video if available or just use from Challenge25's path conceptually
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x24 = () => {
  const [showHints, setShowHints] = useState(false);

  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="challenge-content source-content">
        <h1 className="challenge-header">
          <br /><br /><br />
          0X24 {"->"} HIDDEN IN PLAIN SIGHT
        </h1>
        <p className="challenge-instruction">
          Sometimes secrets are hidden in places we forget to check.
          This webpage looks normal, but something might be hiding behind the scenes. Not everything on a webpage is visible to users directly.
          Take a closer look at the page and see if you can uncover the hidden flag.
        </p>

        <div className="target-link-container">
          <a
            href="https://challenge0x24.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="target-link"
          >
            LAUNCH TARGET SITE {"->"}
          </a>
        </div>

        <button className="hints-toggle-btn" onClick={() => setShowHints(!showHints)}>
          {showHints ? "HIDE HINTS" : "SHOW HINTS"}
        </button>

        {showHints && (
          <div className="hints-list">
            <p><strong>Hint 1:</strong> Not everything on a webpage is visible on the screen.</p>
            <p><strong>Hint 2:</strong> Developers sometimes leave useful information in the source code.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenge0x24;