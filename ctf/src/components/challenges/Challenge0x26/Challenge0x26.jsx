import React from "react";
import "./Challenge26.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x26 = () => {
  return (
    <div className="challenge-wrapper">

      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">

        <h1 className="challenge-header">Challenge 0x26</h1>

        <p className="challenge-description">
          A moving memory was transformed into lines of symbols.
          <br />
          The symbols were scattered into several fragments.
          <br />
          Somewhere within those pieces lies the complete story.
          <br />
          Reassemble them carefully to bring the motion back to life. 🎥
        </p>

        {/* Download Button */}
        <a
          href="/0x26/challenge.zip"
          download
          className="download-button"
        >
          Download Challenge File
        </a>

        <p className="challenge-hint">
          Hint: Sometimes fragments must be joined before they can move again.
        </p>

      </div>
    </div>
  );
};

export default Challenge0x26;