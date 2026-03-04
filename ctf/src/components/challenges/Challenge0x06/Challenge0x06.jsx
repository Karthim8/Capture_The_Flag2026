import React from "react";
import "./Challenge6.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x06 = () => {
  const fileName = "space.txt";
  const fileData = `S S S T	S S T	S S S L
T	L
S S S S S T	T	S T	S S T	L
T	L
S S S S S T	T	S S T	S S L
T	L
S S S S S T	T	S S T	S S L
T	L
S S S S S T	T	S S T	S T	L
T	L
S S S S S T	T	S T	T	T	S L
T	L
S S S S S S T	S S S S S L
T	L
S S S S S T	T	S T	T	S T	L
T	L
S S S S S T	T	S S T	S T	L
T	L
S S S S S T	T	T	S S T	T	L
T	L
S S S S S T	T	T	S S T	T	L
T	L
S S S S S T	T	S S S S T	L
T	L
S S S S S T	T	S S T	T	T	L
T	L
S S S S S T	T	S S T	S T	L
T	L
S S S S S T	T	T	S S T	T	L
T	L
S S S S S S T	S S S S S L
T	L
S S S S S T	T	S S T	S T	L
T	L
S S S S S T	T	S T	T	T	S L
T	L
S S S S S T	T	S S S T	T	L
T	L
S S S S S T	T	S T	T	T	T	L
T	L
S S S S S T	T	S S T	S S L
T	L
S S S S S T	T	S S T	S T	L
T	L
S S S S S T	T	S S T	S S L
T	L
S S S S S S T	S S S S S L
T	L
S S S S S T	T	S T	S S T	L
T	L
S S S S S T	T	S T	T	T	S L
T	L
S S S S S S T	S S S S S L
T	L
S S S S S T	S T	S T	T	T	L
T	L
S S S S S T	T	S T	S S S L
T	L
S S S S S T	T	S T	S S T	L
T	L
S S S S S T	T	T	S T	S S L
T	L
S S S S S T	T	S S T	S T	L
T	L
S S S S S T	T	T	S S T	T	L
T	L
S S S S S T	T	T	S S S S L
T	L
S S S S S T	T	S S S S T	L
T	L
S S S S S T	T	S S S T	T	L
T	L
S S S S S T	T	S S T	S T	L
T	L
S S S S S S T	S S S S S L
T	L
S S S S S T	T	S T	T	S T	L
T	L
S S S S S T	T	S S S S T	L
T	L
S S S S S T	T	T	T	S S T	L
T	L
S S S S S S T	S S S S S L
T	L
S S S S S T	T	T	S S T	S L
T	L
S S S S S T	T	S S T	S T	L
T	L
S S S S S T	T	T	S S S T	L
T	L
S S S S S T	T	T	S T	S T	L
T	L
S S S S S T	T	S T	S S T	L
T	L
S S S S S T	T	T	S S T	S L
T	L
S S S S S T	T	S S T	S T	L
T	L
S S S S S S T	S S S S S L
T	L
S S S S S T	T	T	S S S S L
T	L
S S S S S T	T	S S S S T	L
T	L
S S S S S T	T	T	S S T	S L
T	L
S S S S S T	T	T	S T	S S L
T	L
S S S S S T	T	S T	S S T	L
T	L
S S S S S T	T	S S S T	T	L
T	L
S S S S S T	T	S T	S S T	L
T	L
S S S S S T	T	T	S S S S L
T	L
S S S S S T	T	S S S S T	L
T	L
S S S S S T	T	S T	T	T	S L
T	L
S S S S S T	T	T	S T	S S L
T	L
S S S S S T	T	T	S S T	T	L
T	L
S S S S S S T	S S S S S L
T	L
S S S S S T	T	T	S T	S S L
T	L
S S S S S T	T	S T	T	T	T	L
T	L
S S S S S S T	S S S S S L
T	L
S S S S S T	T	S S T	S T	L
T	L
S S S S S T	T	T	T	S S S L
T	L
S S S S S T	T	T	S T	S S L
T	L
S S S S S T	T	T	S S T	S L
T	L
S S S S S T	T	S S S S T	L
T	L
S S S S S T	T	S S S T	T	L
T	L
S S S S S T	T	T	S T	S S L
T	L
S S S S S S T	S S S S S L
T	L
S S S S S T	T	S T	T	S T	L
T	L
S S S S S T	T	S S T	S T	L
T	L
S S S S S T	T	S S S S T	L
T	L
S S S S S T	T	S T	T	T	S L
T	L
S S S S S T	T	S T	S S T	L
T	L
S S S S S T	T	S T	T	T	S L
T	L
S S S S S T	T	S S T	T	T	L
T	L
S S S S S T	T	S S T	T	S L
T	L
S S S S S T	T	T	S T	S T	L
T	L
S S S S S T	T	S T	T	S S L
T	L
S S S S S S T	S S S S S L
T	L
S S S S S T	T	S T	S S T	L
T	L
S S S S S T	T	S T	T	T	S L
T	L
S S S S S T	T	S S T	T	S L
T	L
S S S S S T	T	S T	T	T	T	L
T	L
S S S S S T	T	T	S S T	S L
T	L
S S S S S T	T	S T	T	S T	L
T	L
S S S S S T	T	S S S S T	L
T	L
S S S S S T	T	T	S T	S S L
T	L
S S S S S T	T	S T	S S T	L
T	L
S S S S S T	T	S T	T	T	T	L
T	L
S S S S S T	T	S T	T	T	S L
T	L
S S S S S S T	S S S S S L
T	L
S S S S S T	T	S S S T	S L
T	L
S S S S S T	T	T	T	S S T	L
T	L
S S S S S S T	S S S S S L
T	L
S S S S S T	T	S T	S S T	L
T	L
S S S S S T	T	S T	T	T	S L
T	L
S S S S S T	T	T	S T	S S L
T	L
S S S S S T	T	S S T	S T	L
T	L
S S S S S T	T	T	S S T	S L
T	L
S S S S S T	T	T	S S S S L
T	L
S S S S S T	T	T	S S T	S L
T	L
S S S S S T	T	S S T	S T	L
T	L
S S S S S T	T	T	S T	S S L
T	L
S S S S S T	T	S T	S S T	L
T	L
S S S S S T	T	S T	T	T	S L
T	L
S S S S S T	T	S S T	T	T	L
T	L
S S S S S S T	S S S S S L
T	L
S S S S S T	T	T	S T	S S L
T	L
S S S S S T	T	S T	S S S L
T	L
S S S S S T	T	S S T	S T	L
T	L
S S S S S S T	S S S S S L
T	L
S S S S S T	T	S S S T	T	L
T	L
S S S S S T	T	S T	T	T	T	L
T	L
S S S S S T	T	S S T	S S L
T	L
S S S S S T	T	S S T	S T	L
T	L
S S S S S S T	S S S S S L
T	L
S S S S S T	T	S S S T	T	L
T	L
S S S S S T	T	S T	T	T	T	L
T	L
S S S S S T	T	T	S S T	S L
T	L
S S S S S T	T	T	S S T	S L
T	L
S S S S S T	T	S S T	S T	L
T	L
S S S S S T	T	S S S T	T	L
T	L
S S S S S T	T	T	S T	S S L
T	L
S S S S S T	T	S T	T	S S L
T	L
S S S S S T	T	T	T	S S T	L
T	L
S S S S S S T	S T	T	T	S L
T	L
S S S S S S S S T	S T	S L
T	L
S S S S S T	S S S S T	T	L
T	L
S S S S S T	S T	S S T	S L
T	L
S S S S S T	S S S S S T	L
T	L
S S S S S T	S S S S T	T	L
T	L
S S S S S T	S S T	S T	T	L
T	L
S S S S S T	S S S T	S T	L
T	L
S S S S S T	S S S T	S S L
T	L
S S S S S T	T	T	T	S T	T	L
T	L
S S S S S T	T	T	T	S S T	L
T	L
S S S S S T	T	T	S T	S S L
T	L
S S S S S T	S T	S T	S S L
T	L
S S S S S T	S T	T	S S T	L
T	L
S S S S S T	S T	S T	S S L
T	L
S S S S S T	S S S T	T	S L
T	L
S S S S S T	T	T	S T	T	S L
T	L
S S S S S T	T	S T	S T	S L
T	L
S S S S S T	T	S T	S T	T	L
T	L
S S S S S T	T	T	T	S S T	L
T	L
S S S S S T	T	T	S T	T	T	L
T	L
S S S S S T	T	S T	T	S T	L
T	L
S S S S S T	S T	S T	S T	L
T	L
S S S S S T	S S T	S S S L
T	L
S S S S S T	S T	S T	T	S L
T	L
S S S S S T	T	S T	T	T	T	L
T	L
S S S S S T	S T	S S S S L
T	L
S S S S S T	T	S T	S S S L
T	L
S S S S S T	S S S T	T	S L
T	L
S S S S S T	S T	S S S T	L
T	L
S S S S S T	T	T	T	T	S T	L
T	L
S S L
L
L
`;

  // Function to trigger file download
  const downloadFile = () => {
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
        <h1 className="challenge-header">0x06 {"->"} Ethereal Gaps</h1>
        <p className="challenge-instruction">Lost in the Void: Can You Read Between the Spaces.</p>

        {/* Download Button */}
        <button className="download-btn" onClick={downloadFile}>
          Download Challenge File
        </button>
      </div>
    </div>
  );
};

export default Challenge0x06;
