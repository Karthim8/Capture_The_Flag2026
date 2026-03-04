import React, { useEffect } from "react";
import "./Challenge34.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x34 = () => {

useEffect(() => {

  const part1 = "L2hp";
  const part2 = "ZGRl";
  const part3 = "bi1l";
  const part4 = "bnRy";
  const part5 = "eQ==";

  const encoded = part1 + part2 + part3 + part4 + part5;

  const showLog = () => {

    console.clear();

    console.log(
      "%c⚠ SYSTEM TRACE FOUND ⚠",
      "color:red; font-size:20px; font-weight:bold"
    );

    console.log(
      "%c" + encoded,
      "color:#00ff00; font-size:18px; font-family:monospace"
    );

    // After 1.5 seconds → clear
    setTimeout(() => {
      console.clear();
    }, 100);

  };

  // Show every 4 seconds
  const interval = setInterval(showLog, 500);

      // After 1.5 seconds → clear
    setTimeout(() => {
      console.clear();
    }, 100);

  return () => clearInterval(interval);

}, []);

  return (
    <div className="challenge-wrapper">
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <button className="back-button" onClick={() => window.history.back()}>
        Back
      </button>

      <div className="challenge-content">
        <h2 className="challenge-header">0x34 → Digital Footprint</h2>

        <p className="challenge-instruction">
          Every system leaves a trace.<br />
          Developers sometimes forget to clean their logs.<br /><br />
          <strong>Hint:</strong> Inspect deeper. Not everything is visible.
        </p>
      </div>

      <footer className="footer">@ ByteBuster's Club 2026</footer>
    </div>
  );
};

export default Challenge0x34;