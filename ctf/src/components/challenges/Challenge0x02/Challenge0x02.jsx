import React from "react";
import "./Challenge2.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x02 = () => {

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/SampleFlag.txt";
    link.download = "SampleFlag.txt";

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
          0x02 {"-> Sample Flag"}
        </h1>

        <div className="challenge-instruction">
          <p>
            I am a sample flag.
          </p>

          <p>
            Sometimes the easiest way to discover information
            is simply by downloading it.
          </p>

          <p>
            Try downloading the file below and see what it contains.
          </p>
        </div>

        <button className="download-btn" onClick={downloadFile}>
          Download Me
        </button>

      </div>

    </div>
  );
};

export default Challenge0x02;