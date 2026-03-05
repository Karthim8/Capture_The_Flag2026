import React from "react";
import "./Challenge11.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x11 = () => {

  const runChallenge = () => {
    window.open("http://localhost:3009", "_blank");
  };

  return (
    <div className="challenge-wrapper">

      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="challenge-content">

        <h1 className="challenge-header">
          0x08 → Cookie Monster
        </h1>

        <p className="challenge-description">
          The Cookie Monster loves cookies, but only special visitors
          are allowed to see the secret recipe.
        </p>

        <p className="challenge-description">
          The website uses cookies to determine who you are.
          Maybe the monster trusts cookies too much...
        </p>

        <p className="challenge-hint">
          Hint: Try inspecting or modifying browser cookies.
        </p>

        <button className="run-btn" onClick={runChallenge}>
          Run Challenge
        </button>

      </div>
    </div>
  );
};

export default Challenge0x11;