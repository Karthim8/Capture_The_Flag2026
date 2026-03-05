import React, { useState, useEffect, useRef } from "react";
import "./Challenge13.css";
import bgVideo from "../video/video bg ctf.mp4";
import useTrash from "../trash";

const IMAGE_URL = process.env.PUBLIC_URL + "/0x13/0x13.png";

const Challenge0x13 = () => {
  const { d, error } = useTrash("4");
  const [retrievedData, setRetrievedData] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [shake, setShake] = useState(false);
  const [solved, setSolved] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (d) {
      setRetrievedData(d);
    }
  }, [d]);

  const handleSubmit = () => {
    if (!answer.trim()) return;

    // Check if the answer matches the stored flag/data from useTrash
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
        <h1 className="challenge-header">0x13 {"-> church finder"}</h1>

        <p className="challenge-instruction">
          When I was overseas I visited a nice church, but I can't remember what
          it was called. To make it worse, the only picture I have is this photo
          I took nearby.
          <br />
          <br />
          Can you find the name of the nearest church to this location?
        </p>

        {/* View Image Button */}
        <button
          className="view-image-btn"
          onClick={() => setShowImage(true)}
        >
          🖼 View Image
        </button>

        {/* Wrong answer feedback */}
        {submitted && !solved && (
          <p className="wrong-answer">✗ Incorrect. Keep searching.</p>
        )}

        {/* Flag Display */}
        {solved && retrievedData && (
          <div className="flag">
            🎉 Flag: <span>{retrievedData}</span> 🎉
          </div>
        )}
      </div>

      {/* Image Modal */}
      {showImage && (
        <div
          className="image-modal-overlay"
          onClick={() => setShowImage(false)}
        >
          <div
            className="image-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setShowImage(false)}
            >
              ✕
            </button>
            <img
              src={IMAGE_URL}
              alt="Location clue"
              className="modal-image"
            />
            <p className="modal-caption">
              📍 Can you identify the nearest church?
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Challenge0x13;