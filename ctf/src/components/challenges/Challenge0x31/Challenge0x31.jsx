import React, { useState } from "react";
import "./Challenge31.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x31 = () => {
  const [payload, setPayload] = useState("");
  const [output, setOutput] = useState("");

  // 🔐 Hidden flag (NOT visible in inspect)
  const secret = (() => {
    const flag = "THREADS26{XSS_DOMINATION}";
    return () => flag;
  })();

  const handleSubmit = (e) => {
    e.preventDefault();

    // vulnerable render (XSS entry)
    setOutput(payload);

    // expose flag only to JS execution
    window.getHiddenFlag = secret;
    delete window.alert;
  };

  return (
    <div className="challenge-wrapper">

      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <button className="back-button" onClick={() => window.history.back()}>
        Back
      </button>

      <div className="challenge-content">
        <h1 className="challenge-header">0x31 → XSS Injection</h1>

        <p className="challenge-instruction">
          The admin message viewer reflects user input.
          Can you execute JavaScript and steal the hidden flag?
          <br /><br />
          <strong>Hint:</strong> The flag is not visible on Here.
        </p>

        <form onSubmit={handleSubmit} className="challenge-form">
          <input
            type="text"
            className="ip-input"
            placeholder="Enter payload"
            value={payload}
            onChange={(e) => setPayload(e.target.value)}
          />
          <button type="submit" className="submit-btn">Inject</button>
        </form>

        {/* vulnerable render */}
        <div
          className="output-box"
          dangerouslySetInnerHTML={{ __html: output }}
        ></div>

      </div>

      <footer className="footer">@ ByteBuster's Club 2026</footer>
    </div>
  );
};

export default Challenge0x31;