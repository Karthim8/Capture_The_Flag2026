import React, { useState } from "react";
import "./Challenge0x09.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x09 = () => {

  const encryptedText = "PENPXRQ{abg_gbb_onq_bs_n_ceboyrz}";
  const [fileFound, setFileFound] = useState(false);

  const applyShift = () => {
    setFileFound(true);
  };

  const downloadFile = () => {
    const fileContent = "PENPXRQ{abg_gbb_onq_bs_n_ceboyrz}";
    const blob = new Blob([fileContent], { type: "text/plain" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "flag.txt";

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
          0x09 {"-> Shifted Domain Mystery"}
        </h1>

        <div className="challenge-instruction">
          <p><strong>Website:</strong> FCH1.com</p>
          <p>Left shift the alphabets by 12 and right shift the numbers by 12.</p>
          <p>Use the transformed result to find the hidden text file and retrieve the flag.</p>
        </div>

        <button className="action-btn" onClick={applyShift}>
          Apply Shift & Locate File
        </button>

        {fileFound && (
          <div className="download-section">
            <button className="download-btn" onClick={downloadFile}>
              Download Flag File
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Challenge0x09;