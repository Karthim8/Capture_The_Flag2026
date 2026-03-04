import React, { useState } from "react";
import "./Challenge21.css";
import bgVideo from "../video/video bg ctf.mp4"; // Ensure correct file path
import useTrash from "../trash";

const Challenge0x21 = () => {
  const { d: SECRET_PASSWORD, error: fetchError } = useTrash(7); // Fetch the secret password
  const { d: FLAG } = useTrash(8); // Fetch the flag

  const [messages, setMessages] = useState([
    { text: "🤖 Hello! I have a secret password. Can you guess it?", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleGuess = () => {
    if (!userInput.trim()) return;

    // Add user message
    const newMessages = [...messages, { text: `👤 ${userInput}`, sender: "user" }];
    const hint = generateHint(userInput.trim());

    // Add bot response
    newMessages.push({ text: `🤖 ${hint}`, sender: "bot" });
    setMessages(newMessages);
    setUserInput("");
  };

  const generateHint = (input) => {
    if (!SECRET_PASSWORD) return "⚠️ Loading password... please wait.";

    if (input === SECRET_PASSWORD) {
      return `🎉 Congratulations! You cracked it! Here is your flag: ${FLAG || "Loading flag..."}`;
    }
    if (input.length < SECRET_PASSWORD.length) {
      return "❌ Hmm... That's too short. Try a longer guess!";
    } else if (input.length > SECRET_PASSWORD.length) {
      return "❌ Oops! Too long. Maybe trim it down?";
    } else {
      let correctChars = 0;
      for (let i = 0; i < SECRET_PASSWORD.length; i++) {
        if (input[i] === SECRET_PASSWORD[i]) {
          correctChars++;
        }
      }
      return `🔍 You're getting closer! ${correctChars} letters are correct and in the right place.`;
    }
  };

  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">0x21 {'-> password guessing chat bot'}</h1>
        <p className="challenge-instruction">
          Guess the secret password and unlock the flag!
        </p>

        {/* Show fetch error if any */}
        {fetchError && <p className="error-message">⚠️ Error fetching password</p>}

        {/* Chatbox */}
        <div className="chatbox">
          {messages.map((msg, index) => (
            <p key={index} className={`message ${msg.sender}`}>{msg.text}</p>
          ))}
        </div>

        {/* Input Field */}
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your guess here..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGuess()}
            className="password-input"
          />
          <button onClick={handleGuess} className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Challenge0x21;
