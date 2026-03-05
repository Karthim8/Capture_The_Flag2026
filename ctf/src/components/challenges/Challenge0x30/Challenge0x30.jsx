import React from "react";
import "./Challenge30.css"; 
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x30 = () => {
  return (
    <div className="challenge-wrapper">

      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">

        <h1 className="challenge-header">0x30 → Web Investigation</h1>

        <p className="challenge-instruction">
          Developers often leave traces of information inside their applications.
          Sometimes these clues are hidden in places that regular users never
          notice.

          <br /><br />

          Your task is to investigate the following website carefully and locate
          the flag. It may or may not appear directly on the page, so explore
          deeper and inspect everything you can.

          <br /><br />
{/* 
          🔎 <strong>Hint:</strong> View source, inspect elements, and analyze the
          site's behavior. */}

          <br />

          Target Website:
          <br />
          <a
            href="https://sonacgpa.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="challenge-link"
          >
            https://sonacgpa.vercel.app
          </a>
        </p>

      </div>

    </div>
  );
};

export default Challenge0x30;