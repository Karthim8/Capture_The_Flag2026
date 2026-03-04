import React, { useState, useEffect } from "react";
import "./Challenge7.css";
import bgVideo from "../video/video bg ctf.mp4"; // Ensure this file is in the correct location
import useTrash from "../trash";

const Challenge0x07 = () => {
  // Player state
  const [player, setPlayer] = useState({ x: 50, y: 50 });
  const [flag, setFlag] = useState("");
  const [fixedFlag, setFixedFlag] = useState("");
  const playerSize = 20;
  const speed = 5;

  // Get flag data from useTrash
  const { d: flagData } = useTrash("3");

  useEffect(() => {
    if (flagData) setFixedFlag(flagData);
  }, [flagData]);

  // Hidden area where the flag is located
  const hiddenZone = { x: 400, y: 400, width: 50, height: 50 };

  // Handle keypress for movement
  useEffect(() => {
    const handleKeyPress = (event) => {
      setPlayer((prev) => {
        let newX = prev.x;
        let newY = prev.y;

        if (event.key === "ArrowUp") newY -= speed;
        if (event.key === "ArrowDown") newY += speed;
        if (event.key === "ArrowLeft") newX -= speed;
        if (event.key === "ArrowRight") newX += speed;

        // Check if player reaches hidden zone
        if (
          newX > hiddenZone.x &&
          newX < hiddenZone.x + hiddenZone.width &&
          newY > hiddenZone.y &&
          newY < hiddenZone.y + hiddenZone.height
        ) {
          setFlag(`🎉 Congratulations! You found the flag: ${fixedFlag}`);
          alert(flagData);
        }

        return { x: newX, y: newY };
      });
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [fixedFlag]);

  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">0x07 {'-> Find The Secret Spot'}</h1>
        <p className="challenge-instruction">
          Find the hidden flag! Use arrow keys to move.
        </p>

        {/* Game Canvas (Div-based) */}
        <div className="game-container">
          <div
            className="player"
            style={{
              left: player.x,
              top: player.y,
              width: playerSize,
              height: playerSize,
              position: "absolute",
              backgroundColor: "red",
            }}
          ></div>
        </div>

        {flag && <p className="challenge-flag">{flag}</p>}
      </div>
    </div>
  );
};

export default Challenge0x07;
