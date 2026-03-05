import React, { useState } from "react";
import "./Challenge18.css";
import bgVideo from "../video/video bg ctf.mp4"; // Ensure you have the video file in the correct path

const Challenge0x18 = () => {
  const [hintLevel, setHintLevel] = useState(0);

  const hints = [
    "The file might look like a picture… but computers know files by their true identity.",
    "Sometimes the name isn’t the truth. Ask the file what it really is."
  ];

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
            “Say my name.”
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

        {/* Hints Section */}
        <div className="hints-section" style={{ marginTop: "5px", textAlign: "left", maxWidth: "600px", margin: "20px auto 0 auto", backgroundColor: "rgba(0,0,0,0.6)", padding: "20px", borderRadius: "10px", border: "1px solid #00ff00" }}>
          <button
            className="hint-btn"
            onClick={() => setHintLevel(prev => Math.min(prev + 1, hints.length))}
            disabled={hintLevel === hints.length}
            style={{
              padding: "5px 10px",
              backgroundColor: "transparent",
              color: "#00ff00",
              border: "1px solid #00ff00",
              borderRadius: "3px",
              cursor: hintLevel === hints.length ? "not-allowed" : "pointer",
              fontFamily: '"Courier New", monospace',
              marginBottom: "0px",
              display: "block"
            }}
          >
            {hintLevel < hints.length ? `Reveal Hint ${hintLevel + 1}` : "No more hints"}
          </button>

          {hintLevel > 0 && (
            <div className="hints-list">
              {hints.slice(0, hintLevel).map((hint, index) => (
                <div key={index} className="hint-item" style={{ marginBottom: "5px" }}>
                  <strong>Hint {index + 1}:</strong> {hint}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Challenge0x18;
