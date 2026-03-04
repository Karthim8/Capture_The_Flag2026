import React, { useState, useEffect } from "react";
import "./Challenge3.css";
import bgVideo from "../video/video bg ctf.mp4";
import useTrash from "../trash";

const Challenge0x03 = () => {
  const [inputValue, setInputValue] = useState("");
  const [flag, setFlag] = useState("");
  const [correctWord, setCorrectWord] = useState("");
  const [fixedFlag, setFixedFlag] = useState("");

  const { d: wordData } = useTrash("2");
  const { d: flagData } = useTrash("1");

  useEffect(() => {
    if (flagData) setFixedFlag(flagData);
  }, [flagData]);

  useEffect(() => {
    if (wordData) setCorrectWord(wordData);
  }, [wordData]);

  const handleSubmit = () => {
    if (inputValue.toUpperCase() === correctWord.toUpperCase()) {
      setFlag(fixedFlag);
    } else {
      setFlag("Incorrect! Try again.");
    }
  };

  return (
    <div className="challenge-wrapper">
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="challenge-content">
        <h1 className="challenge-header">0x03 {'-> Track Me'} </h1>
        <p className="challenge-number">9080668018/6379799143</p>

        <input
          type="text"
          placeholder="Enter text"
          className="challenge-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="challenge-button" onClick={handleSubmit}>
          Submit
        </button>

        {flag && <p className="challenge-flag">{flag}</p>}
      </div>
    </div>
  );
};

export default Challenge0x03;
