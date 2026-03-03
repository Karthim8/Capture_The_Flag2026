import React, { useState } from "react";

import useTrash from "../trash";
import "./Challenge15.css";
import bgVideo from "../../video/video bg ctf.mp4"; // Ensure the correct path

const FILE_URL = process.env.PUBLIC_URL + "/files/challenge0x15.zip"; // File in public folder

const Challenge0x15 = () => {
  const { d: CORRECT_PASSWORD, error: fetchError } = useTrash(6); // Fetch the correct password
  const { d: FLAG } = useTrash(5); // Fetch the flag

  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");

  const handleUnlock = () => {
    if (password === CORRECT_PASSWORD) {
      setIsUnlocked(true);
      setError("");
    } else {
      setError("❌ Incorrect password! Try again.");
    }
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
        <h1 className="challenge-header">0x15 {'-> password protected'}</h1>
        <p className="challenge-instruction">
          Download the file and enter the correct password to unlock the flag!
        </p>

        {/* Show fetch error if any */}
        {fetchError && <p className="error-message">⚠️ Error fetching password</p>}

        {/* Download File Button */}
        {!isUnlocked && (
          <a href={FILE_URL} download className="download-button">
            Download File
          </a>
        )}

        {/* Password Input Section */}
        {!isUnlocked ? (
          <div className="password-container">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password-input"
            />
            <button onClick={handleUnlock} className="unlock-button">
              Unlock
            </button>
            {error && <p className="error-message">{error}</p>}
          </div>
        ) : (
          <div className="flag">🎉 {FLAG || "Flag Unlocked"} 🎉</div>
        )}
      </div>
    </div>
  );
};

export default Challenge0x15;
