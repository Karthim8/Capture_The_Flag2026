import React, { useState } from "react";
import "./Challenge25.css";
// import video if available or just use from Challenge28
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x25 = () => {
  const [showHints, setShowHints] = useState(false);
  const [ipInput, setIpInput] = useState("");
  const [flagStatus, setFlagStatus] = useState(null); // null | "success" | "error"

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleSubmitIP = (e) => {
    e.preventDefault();
    const v4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (v4Regex.test(ipInput.trim())) {
      setFlagStatus("success");
    } else {
      setFlagStatus("error");
    }
  };

  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="challenge-content ghost-content">
        <h1 className="challenge-header">
          0X25 {"->"} GHOST IN THE NET
        </h1>
        <p className="challenge-instruction">
          The target is an e-commerce giant — its name is at of the alphabetic array. Find the <strong>public IP</strong> of this famous Indian grocery delivery website that starts with . Submit the IP {"->"} get the flag.
        </p>
        <form onSubmit={handleSubmitIP} className="ip-submission-form">
          <input
            type="text"
            placeholder="Enter public IP (e.g. 104.18.x.x)"
            value={ipInput}
            onChange={(e) => setIpInput(e.target.value)}
            className="ip-input"
          />
          <button type="submit" className="ip-submit-btn">SUBMIT IP</button>
        </form>

        {flagStatus === "success" && (
          <div className="flag-reveal">
            <strong>Flag: </strong> CRACKED{'{'}Link_The_Blink_{'}'}
          </div>
        )}

        {flagStatus === "error" && (
          <div className="error-msg">
            Invalid IPv4 format. Try again.
          </div>
        )}

        <button className="hints-toggle-btn" onClick={() => setShowHints(!showHints)}>
          {showHints ? "HIDE HINTS" : "SHOW HINTS"}
        </button>

        {showHints && (
          <div className="hints-list">
            <p><strong>Hint 01:</strong> Talks about 10-minute grocery delivery, name "rhymes with a flash of light ⚡"</p>
            <p><strong>Hint 02:</strong> How to resolve an IP — <code>ping</code>, <code>nslookup</code>, online DNS tools</p>
            <p><strong>Hint 03:</strong> The company was formerly <strong>Grofers</strong>, rebranded, backed by Zomato</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenge0x25;
