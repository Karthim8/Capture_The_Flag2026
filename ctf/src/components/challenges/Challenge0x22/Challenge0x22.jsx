import React, { useState } from "react";
import "./Challenge22.css";
import bgVideo from "../video/video bg ctf.mp4";

const CORRECT_IP = "34.231.252.22";
const CORRECT_FLAG = "wellc0me T0 CTf";

const Challenge0x22 = () => {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [shake, setShake] = useState(false);
  const [solved, setSolved] = useState(false);

  const handleSubmit = () => {
    if (!answer.trim()) return;

    if (answer.trim() === CORRECT_IP) {
      setSolved(true);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
    setSubmitted(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
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
        <h1 className="challenge-header">0x22 {"-> Network Address"}</h1>

        <p className="challenge-instruction">
          Find the address that is relevant to the{" "}
          <span className="highlight">Networking Address</span>?
        </p>

        {/* Hint block */}
        <div className="hint-block">
          <span className="hint-label">HINT</span>
          <p className="hint-text">
            Think about addresses used in networking —{" "}
            <span className="highlight">IP addresses</span> identify devices on
            a network. Find the relevant IP address and enter it below.
          </p>
        </div>

        {/* Answer Input */}
        <div className={`answer-section ${shake ? "shake" : ""}`}>
          <input
            type="text"
            className="answer-input"
            placeholder="e.g. 192.168.1.1"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={solved}
          />
          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={solved}
          >
            Submit
          </button>
        </div>

        {/* Wrong answer feedback */}
        {submitted && !solved && (
          <p className="wrong-answer">✗ Incorrect. Think about IP addressing.</p>
        )}

        {/* Flag Display */}
        {solved && (
          <div className="flag">
            🎉 Flag: <span>{CORRECT_FLAG}</span> 🎉
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenge0x22;