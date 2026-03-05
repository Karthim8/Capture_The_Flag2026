import React from "react";
import "./Challenge6.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x06 = () => {

  const runChallenge = () => {
    window.open("http://localhost:3005", "_blank");
  };

  return (
    <div className="challenge-wrapper">

      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Centered Challenge Content */}
      <div className="challenge-content">

        <h1 className="challenge-header">
          0x06 {"->"} Hidden Endpoint
        </h1>

        <p className="challenge-description">
          The developers built a simple blog API for testing.
          Everything appears normal at first glance, but sometimes
          forgotten tools remain hidden in production systems.
        </p>

        <p className="challenge-hint">
          Explore the application carefully.
          Some endpoints are not listed in the documentation.
        </p>

        <button className="run-btn" onClick={runChallenge}>
          Run Challenge
        </button>

      </div>
    </div>
  );
};

export default Challenge0x06;