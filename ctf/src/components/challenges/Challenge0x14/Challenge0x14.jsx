import React from "react";
import "./Challenge14.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x14 = () => {
  return (
    <div className="challenge-wrapper">

      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">

        <h1 className="challenge-header">0x14 {"->"} Encoded File</h1>

        <p className="challenge-instruction">
          A mysterious text file has been provided, containing an encoded
          message. Your task is to identify the correct base encoding
          method used and decode the content to reveal the hidden flag.
        
          Carefully analyze the pattern, determine the base format,
          and extract the original message.
        </p>

        {/* Download File */}
        <a
          href="/EncodedFile.txt"
          download
          className="challenge-file"
        >
          Download Encoded File
        </a>

      </div>
    </div>
  );
};

export default Challenge0x14;