import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TechCategories.css";
import bgVideo from "../video/video bg ctf.mp4";
// import flagVerify from "./challenges/flagVerification";
// import {getCompletionStatus} from "./compstatus";
import flagVerify from "./challenges/flagVerification";
import checkCompletion from "./challenges/compstatus";

const challenges = [
  { id: "0x01", points: "50 ", description: "LOG HUNT", difficulty: "BEGINEER" },
  { id: "0x02", points: "100 ", description: "WORLD NET", difficulty: "CHALLENGER" },
  { id: "0x03", points: "50 ", description: "BROKEN PARADISE", difficulty: "BEGINEER" },
  { id: "0x04", points: "50 ", description: "HIDDEN HISTORY", difficulty: "BEGINEER" },
  { id: "0x05", points: "50 ", description: "CAN YOU BEAT THIS ?", difficulty: "BEGINEER" },
  { id: "0x06", points: "200 ", description: "BLANK", difficulty: "MASTER" },
  { id: "0x07", points: "50 ", description: "HIDDEN HAVEN", difficulty: "BEGINEER" },
  { id: "0x08", points: "200 ", description: "SCRAMBLED BYTES", difficulty: "MASTER" },
  { id: "0x09", points: "100 ", description: "HIDDEN MYSTERY", difficulty: "CHALLENGER" },
  { id: "0x10", points: "50 ", description: "UNREAVELING", difficulty: "BEGINEER" },
  { id: "0x11", points: "100 ", description: "XOR ENCODE", difficulty: "CHALLENGER" },
  { id: "0x12", points: "100 ", description: "PHONE WORD", difficulty: "CHALLENGER" },
  { id: "0x13", points: "50 ", description: "JIGSAW", difficulty: "BEGINEER" },
  { id: "0x14", points: "100 ", description: "BACON", difficulty: "CHALLENGER" },
  { id: "0x15", points: "100 ", description: "LOCKED VAULT", difficulty: "CHALLENGER" },
  { id: "0x16", points: "100 ", description: "DOCTOR BLACK", difficulty: "CHALLENGER" },
  { id: "0x17", points: "100 ", description: "ATTACK", difficulty: "CHALLENGER" },
  { id: "0x18", points: "50 ", description: "ERROR FRAME", difficulty: "BEGINEER" },
  { id: "0x19", points: "200 ", description: "KEYGEN BREAKER", difficulty: "MASTER" },
  { id: "0x20", points: "100 ", description: "DESHUFFLING", difficulty: "CHALLENGER" },
  { id: "0x21", points: "100 ", description: "LOCKPICK AI", difficulty: "CHALLENGER" },
  { id: "0x22", points: "100 ", description: "LEXICAL UNIFICATION GRID", difficulty: "CHALLENGER" },
  { id: "0x23", points: "150 ", description: "STEGNOGRAPHY", difficulty: "CHALLENGER" },
  { id: "0x24", points: "50 ", description: "HUNTING", difficulty: "BEGINEER" },
  { id: "0x25", points: "200 ", description: "FILE HUNT", difficulty: "MASTER" },
  { id: "0x26", points: "100 ", description: "UN SHIFT", difficulty: "CHALLENGER" },
  { id: "0x27", points: "200 ", description: "~Audio~", difficulty: "MASTER" },
  { id: "0x28", points: "50 ", description: "FIND ME", difficulty: "BEGINEER" },
  { id: "0x29", points: "50 ", description: "FLAG HUNT", difficulty: "BEGINEER" },
  { id: "0x30", points: "100 ", description: "WRAPED IMAGE", difficulty: "CHALLENGER" },
  { id: "0x31", points: "50 ", description: "IP PROTOCAL", difficulty: "BEGINEER" },
  { id: "0x32", points: "50 ", description: "ANALYSE PACKETS", difficulty: "BEGINEER" },
  { id: "0x33", points: "50 ", description: "BAKE COOKIES", difficulty: "BEGINEER" },
  { id: "0x34", points: "100 ", description: "HIDDEN WEB", difficulty: "CHALLENGER" },
  { id: "0x35", points: "100 ", description: "FIND IT ?", difficulty: "CHALLENGER" },
  { id: "0x36", points: "100 ", description: "ARCANE CALCULATOR", difficulty: "CHALLENGER" },
  // { id: "0x37", points: "50 ", description: "Just Connect to SSH - GET a Flag", difficulty: "EASY" },
  // { id: "0x38", points: "50 ", description: "Strings STR", difficulty: "EASY" },
  // { id: "0x39", points: "100 ", description: "Debugger --", difficulty: "HARD" },
];


const TechCategories = () => {
  const [completed, setCompleted] = useState({});
  const [userFlags, setUserFlags] = useState({});
  const [messages, setMessages] = useState({});
  const navigate = useNavigate();

  const loggedInTeam = localStorage.getItem("loggedInTeam");

  useEffect(() => {
    if (!loggedInTeam) {
      console.error("❌ No team logged in.");
      return;
    }
    const fetchCompletionStatus = async () => {
      const completionStatus = {};
      for (const challenge of challenges) {
        const status = await checkCompletion(loggedInTeam, challenge.id);
        completionStatus[challenge.id] = status;
      }
      setCompleted(completionStatus);
    };
    fetchCompletionStatus();
  }, [loggedInTeam]);


  const handleFlagSubmit = async (index, challengeId) => {
    const userFlag = userFlags[index] || "";
    if (!userFlag) {
      setMessages((prev) => ({ ...prev, [index]: "⚠️ Please enter a flag." }));
      return;
    }

    const isCorrect = await flagVerify(challengeId, userFlag);
    if (isCorrect) {
      setMessages((prev) => ({ ...prev, [index]: "🎉 Correct flag! Score updated." }));
      setCompleted((prev) => ({ ...prev, [challengeId]: true }));
    } else {
      setMessages((prev) => ({ ...prev, [index]: "🚫 Incorrect flag or already submitted. Try again." }));
    }
  };

  return (
    <div className="tech-container">
      {/* Background Video */}
      <video autoPlay loop muted className="tech-background">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="tech-content">
        <h1 className="tech-title">Challenges</h1>
        <p className="tech-subtitle">“Every lock has a key. Every system has a flaw.”</p>
        <div className="tech-underline"></div>
        <div className="tech-grid">
          {challenges.map((challenge, index) => (
            <div key={challenge.id} className="tech-card">
              <h2 className="tech-card-title">{challenge.id}</h2>
              <p className="tech-card-count">{challenge.points} Points</p>
              <p className="tech-card-description">{challenge.description}</p>
              <span className="tech-difficulty">{challenge.difficulty}</span>
              <div className={`tech-status ${completed[challenge.id] ? "completed" : "not-completed"}`}>
                {completed[challenge.id] ? "COMPLETED SUCCESSFULLY" : "NOT COMPLETED YET"}
              </div>
              <button className="tech-button" onClick={() => navigate(`/challenges/${challenge.id}`)}>
                Go There
              </button>
              <button className="tech-button">💡 Get HINT</button>
              <div className="flag-container">
                <input
                  type="text"
                  className="flag-input"
                  placeholder="Enter Flag"
                  value={userFlags[index] || ""}
                  onChange={(e) => setUserFlags((prev) => ({ ...prev, [index]: e.target.value }))}
                />
                <button className="flag-submit" onClick={() => handleFlagSubmit(index, challenge.id)}>
                  GO!
                </button>
              </div>
              {messages[index] && <p className="message">{messages[index]}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechCategories;
