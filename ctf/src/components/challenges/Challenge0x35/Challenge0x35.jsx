import React, { useState, useEffect } from "react";
import "./Challenge35.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x35 = () => {

  const [input, setInput] = useState("");
  const [flag, setFlag] = useState("");
  const [error, setError] = useState("");

  // fake API request (hidden clue)
  useEffect(() => {

    fetch("/wannacry_trace.log")
      .then(res => res.text())
      .then(data => {
        console.log("connected...");
      });

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(input.trim().toLowerCase()==="killswitch.wannacry"){
      setFlag("THREADS26{Command_Server_Discovered}");
      setError("");
    } else {
      setError("❌ Command server not valid.");
      setFlag("");
    }
  };

  return (
    <div className="challenge-wrapper">

      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <button className="back-button" onClick={() => window.history.back()}>
        Back
      </button>

      <div className="challenge-content">
        <h1 className="challenge-header">0x35 → WannaCry Command Server</h1>

        <p className="challenge-instruction">
          WannaCry communicated with its command server.<br/>
          One hidden request contains the shutdown domain.<br/><br/>
          <strong>Hint:</strong> Monitor network traffic.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter command domain..."
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>

        {error && <p style={{color:"red"}}>{error}</p>}
        {flag && <p className="cracked-flag">{flag}</p>}
      </div>

      <footer className="footer">@ ByteBuster's Club 2026</footer>
    </div>
  );
};

export default Challenge0x35;