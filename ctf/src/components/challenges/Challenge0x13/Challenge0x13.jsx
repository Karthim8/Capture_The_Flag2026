import React, { useState, useEffect } from "react";
import "./Challenge13.css";
import bgVideo from "../video/video bg ctf.mp4";
import useTrash from "../trash";


const GRID_SIZE = 5; // Changed to 5x5 grid
const PIECE_SIZE = 80; // Adjusted size to fit a 400px container
const IMAGE_URL = process.env.PUBLIC_URL + "/puzzle.jpeg"; // Ensure image is in 'public/'

const Challenge0x13 = () => {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    initializePuzzle();
  }, []);

  const { d, error } = useTrash("4"); // Call the function and get the data
  const [retrievedData, setRetrievedData] = useState(null);

  useEffect(() => {
    if (d) {
      setRetrievedData(d); // Save retrieved data in state
    }
  }, [d]);





  // Initialize the puzzle pieces
  const initializePuzzle = () => {
    let initialPieces = [];
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
      initialPieces.push({
        id: i,
        correctIndex: i,
        currentIndex: i,
      });
    }
    setPieces(shuffle([...initialPieces]));
  };

  // Shuffle function (Fisher-Yates algorithm)
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Drag Start
  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("pieceIndex", index);
  };

  // Drop Handler
  const handleDrop = (event, targetIndex) => {
    event.preventDefault();
    const draggedIndex = event.dataTransfer.getData("pieceIndex");
    const newPieces = [...pieces];

    // Swap the dragged and target pieces
    [newPieces[draggedIndex], newPieces[targetIndex]] = [
      newPieces[targetIndex],
      newPieces[draggedIndex],
    ];
    setPieces(newPieces);
  };

  // Check if puzzle is solved
  const checkSolved = () => {
    return pieces.every((piece, index) => piece.correctIndex === index);
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
        <h1 className="challenge-header">0x13 {'-> jigsaw puzzle'}</h1>
        <p className="challenge-instruction">Rearrange the pieces to solve the puzzle!</p>

        {/* Puzzle Grid */}
        <div className="puzzle-container">
          {pieces.map((piece, index) => (
            <div
              key={piece.id}
              className="piece"
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, index)}
              style={{
                backgroundImage: `url("${IMAGE_URL}")`,
                backgroundPosition: `${-(piece.correctIndex % GRID_SIZE) * PIECE_SIZE}px ${
                  -Math.floor(piece.correctIndex / GRID_SIZE) * PIECE_SIZE
                }px`,
                width: `${PIECE_SIZE}px`,
                height: `${PIECE_SIZE}px`,
                left: `${(index % GRID_SIZE) * PIECE_SIZE}px`,
                top: `${Math.floor(index / GRID_SIZE) * PIECE_SIZE}px`,
              }}
            ></div>
          ))}
        </div>

        {/* Flag Display */}
        {checkSolved() && retrievedData && <div className="flag">🎉 Flag: <span>{retrievedData}</span> 🎉</div>}

      </div>
    </div>
  );
};

export default Challenge0x13;
