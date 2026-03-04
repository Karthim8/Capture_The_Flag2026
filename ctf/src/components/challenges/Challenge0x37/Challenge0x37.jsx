import React from "react";
import "./Challenge37.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x37 = () => {

  const downloadChallenge = () => {
    const link = document.createElement("a");
    link.href = "/Challeneg0x37/fixme1.py";
    link.download = "fixme1.py";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadDictionary = () => {
    const link = document.createElement("a");
    link.href = "/Challeneg0x37/dictionary.tx";
    link.download = "dictionary.tx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="challenge-wrapper">

      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Challenge Card */}
      <div className="challenge-content">

        <h1 className="challenge-header">
          0x37 {'-> Brute Force Attack'}
        </h1>

        <p className="challenge-instruction">
          A mysterious encrypted message has been intercepted.
          The program uses a 4-digit XOR key to decrypt the hidden flag.
          Your mission is to brute force the correct key using the provided
          dictionary and reveal the flag.
        </p>

        <div className="download-buttons">

          <button className="download-btn" onClick={downloadChallenge}>
            Download fixme1.py
          </button>

          <button className="download-btn" onClick={downloadDictionary}>
            Download dictionary.tx
          </button>

        </div>

      </div>

    </div>
  );
};

export default Challenge0x37;