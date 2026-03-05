import React from "react";
import "./Challenge12.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x12 = () => {

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = "/Challenge0x12/image.jpeg";
    link.download = "image.jpeg";

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
          0x12 {"-> Hidden Flag in Image"}
        </h1>

        <div className="challenge-instruction">
          <p>
            In the provided image, a flag is concealed within a sequence of numbers.
          </p>

          <p>
            Your task is to carefully arrange the numbers in the correct order
            and decode the hidden flag from the image.
          </p>
        </div>

        <button className="download-btn" onClick={downloadImage}>
          Download Image
        </button>

      </div>

    </div>
  );
};

export default Challenge0x12;