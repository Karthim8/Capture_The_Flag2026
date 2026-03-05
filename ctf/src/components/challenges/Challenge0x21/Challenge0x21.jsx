import React, { useState, useEffect } from "react";
import "./Challenge21.css";
import bgVideo from "../video/video bg ctf.mp4";
import useTrash from "../trash";

const TARGET_URL = "http://web.ctflearn.com/web7/";

const Challenge0x21 = () => {
  const { d, error } = useTrash("12");
  const [retrievedData, setRetrievedData] = useState(null);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [shake, setShake] = useState(false);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    if (d) setRetrievedData(d);
  }, [d]);

  const handleSubmit = () => {
    if (!answer.trim()) return;

    if (
      retrievedData &&
      answer.trim().toLowerCase() === retrievedData.trim().toLowerCase()
    ) {
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
        <h1 className="challenge-header">0x21 {"-> Insecure Calc"}</h1>

        <p className="challenge-instruction">
          I forget how we were doing those calculations, but something tells me
          it was pretty <span className="highlight">insecure</span>?
        </p>

        {/* Target URL Card */}
        <div className="url-card">
          <span className="url-label">TARGET</span>
          <a
            href={TARGET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="url-link"
          >
            {TARGET_URL}
          </a>
        </div>

        {/* Hint block */}
        <div className="hint-block">
          <span className="hint-label">HINT</span>
          <p className="hint-text">
            Sometimes calculations are evaluated in ways they shouldn't be.
            Think about what happens when user input is passed directly to an
            <span className="highlight"> interpreter</span>.
          </p>
        </div>

        {/* Answer Input */}
        <div className={`answer-section ${shake ? "shake" : ""}`}>
          <input
            type="text"
            className="answer-input"
            placeholder="Enter the flag..."
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
          <p className="wrong-answer">✗ Incorrect. Keep probing.</p>
        )}

        {/* Flag Display */}
        {solved && retrievedData && (
          <div className="flag">
            🎉 Flag: <span>{retrievedData}</span> 🎉
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenge0x21;