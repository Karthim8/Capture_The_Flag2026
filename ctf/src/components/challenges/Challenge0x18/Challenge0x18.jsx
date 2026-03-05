import React from "react";
import "./Challenge18.css";
import bgVideo from "../video/video bg ctf.mp4"; // Ensure you have the video file in the correct path

const Challenge0x18 = () => {
  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">0x18 {"->"} Say My Name</h1>
        <div className="challenge-instruction">
          <p>Subash left behind a file before disappearing. He claimed it was just a normal picture and nothing more. But something about it feels… suspicious.
            Maybe the file knows its own identity, but you need to ask the right question. After all, a certain chemist once said:</p>
          <p>“Say my name.”</p>
        </div>
        <a
          href="/say_my_name.zip"
          download
          style={{
            marginTop: "20px",
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#00ff00",
            color: "#000",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "5px",
            fontFamily: '"Courier New", monospace'
          }}
        >
          Download say_my_name.zip
        </a>
      </div>
    </div>
  );
};

export default Challenge0x18;
