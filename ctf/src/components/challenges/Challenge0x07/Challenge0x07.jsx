import React from "react";
import "./Challenge7.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x07 = () => {

  const runChallenge = () => {
    window.open("http://localhost:5016", "_blank");
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
          0x07 {"->"} Multi-Stage Investigation
        </h1>

        <p className="challenge-description">
          A web system presents a sequence of security puzzles that must be solved
          step by step. Each stage involves analyzing different clues such as
          encoded data, tokens, and unusual server behavior.
        </p>

        <p className="challenge-hint">
          Using Curl Method for submitting answers
        </p>

        <button className="run-btn" onClick={runChallenge}>
          Run Challenge
        </button>
      </div>
    </div>
  );
};

export default Challenge0x07;