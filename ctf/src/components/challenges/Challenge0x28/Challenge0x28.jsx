
import React, { useState } from "react";
import "./Challenge28.css";
import bgVideo from "../video/video bg ctf.mp4"; // Ensure you have the video file in the correct path

const Challenge0x28 = () => {
  const [showHints, setShowHints] = useState(false);

  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header"><br /><br /><br />0X28 {"->"}RSA ENCRYPTION</h1>

        <p className="challenge-instruction">
          We intercepted an encrypted message sent through a secure communication channel. The sender claims the message is protected using RSA encryption with very large prime numbers, making it practically impossible to break by factoring the modulus.
          However, security does not only depend on the size of the primes. Sometimes subtle choices in encryption parameters can introduce unexpected weaknesses.
          You are given the public parameters and the encrypted ciphertext. Analyze the numbers carefully and see if you can recover the original message.
        </p>

        <div className="challenge-terminal">
          <a href="/challenge 28/message.txt" download="message.txt">
            DOWNLOAD MESSAGE.TXT
          </a>
        </div>

        <button className="hints-toggle-btn" onClick={() => setShowHints(!showHints)}>
          {showHints ? "HIDE HINTS" : "SHOW HINTS"}
        </button>

        {showHints && (
          <div className="hints-list">
            <p><strong>Hint 1:</strong> RSA security depends heavily on how the encryption parameters are chosen. Take a closer look at the public exponent.</p>
            <p><strong>Hint 2:</strong> If the plaintext raised to the power of e is smaller than the modulus n, the modulo operation may not affect the result.</p>
            <p><strong>Hint 3:</strong> Try recovering the plaintext by computing the integer e-th root of the ciphertext.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenge0x28;

