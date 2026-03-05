import React, { useState, useEffect } from "react";
import "./Challenge15.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x15 = () => {

  const [input, setInput] = useState("");
  const [flag, setFlag] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  const realPlaceholder = "CRACKED{put_your_flag_here}";

  useEffect(() => {

    const interval = setInterval(() => {

      // show placeholder after 10 seconds
      setTimeout(() => {
        setPlaceholder(realPlaceholder);
      }, 1000);

      // hide placeholder after 20 seconds
      setTimeout(() => {
        setPlaceholder("");
      }, 3000);

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  const checkFlag = () => {
    if (input === realPlaceholder) {
      setFlag("🎉 Correct Flag!");
    } else {
      setFlag("❌ Incorrect flag");
    }
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
          0x15 {"-> Plain Sight"}
        </h1>

        <div className="challenge-instruction">
          <p>
            Sometimes the answer is hiding in plain sight.
          </p>
        </div>

        <input
          type="text"
          placeholder={placeholder}
          className="flag-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="submit-btn" onClick={checkFlag}>
          Submit
        </button>

        {flag && <p className="flag-result">{flag}</p>}

      </div>

    </div>
  );
};

export default Challenge0x15;