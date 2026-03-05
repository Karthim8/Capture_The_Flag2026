import React, { useState, useEffect } from "react";
import "./Challenge16.css";
import bgVideo from "../video/video bg ctf.mp4";
import useTrash from "../trash";

const IMAGE_URL = process.env.PUBLIC_URL + "/0x14/Window.png";

const Challenge0x16 = () => {
  const { d, error } = useTrash("7");
  const [retrievedData, setRetrievedData] = useState(null);
  const [showImage, setShowImage] = useState(false);
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
        <h1 className="challenge-header">0x16 {"-> bike shop finder"}</h1>

        <p className="challenge-instruction">
          The bikes I saw in this shop in Kyoto look beautiful! I'd love to know
          where to buy one. Could you find me the phone number of this exact
          store?
        </p>

        {/* View Image Button */}
        <button className="view-image-btn" onClick={() => setShowImage(true)}>
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
          <div className="image-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setShowImage(false)}
            >
              ✕
            </button>
            <img
              src={IMAGE_URL}
              alt="Kyoto bike shop"
              className="modal-image"
            />
            <p className="modal-caption">📍 Somewhere in Kyoto...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Challenge0x16;