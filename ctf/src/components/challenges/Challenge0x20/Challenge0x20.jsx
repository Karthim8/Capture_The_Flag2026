import React from "react";
import "./Challenge20.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x20 = () => {
  return (
    <div className="challenge-wrapper">
      
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">

        <h1 className="challenge-header">0x20 {"->"} PDF Hidden Flag</h1>

        <p className="challenge-instruction">
          A PDF file contains the hidden flag.
          Carefully inspect the document and analyze the patterns hidden
          inside the text.
        </p>
        <p>Find words that contain <b>more than two capital letters</b>.
          Also extract <b>capital letters mixed with numbers</b>.
        </p>
        
        <p>
          Arrange them in the correct order and decode the result using
          the correct <b>base encoding format</b> to reveal the hidden flag.
        </p>

        {/* PDF Download */}
        <a href="/pdfhiddenflag.pdf" download className="challenge-file">
          Download PDF File
        </a>

      </div>
    </div>
  );
};

export default Challenge0x20;