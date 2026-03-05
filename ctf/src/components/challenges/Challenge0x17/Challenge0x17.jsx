import React, { useState } from "react";
import "./Challenge17.css";
import bgVideo from "../video/video bg ctf.mp4"; // Ensure the video exists in the correct path

const Challenge0x17 = () => {
  const [hintLevel, setHintLevel] = useState(0);

  const hints = [
    "Sometimes large numbers behave strangely in programs.",
    "The shop system might not handle very large calculations correctly.",
    "Try buying item 4 with a suspiciously large quantity.",
    "Quantity 21475 might be interesting."
  ];

  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">0x17 {'->'} NeoMart Overflow</h1>

        <div className="challenge-instruction">
          <p>
            Welcome to <strong>NeoMart</strong>, a futuristic shopping system.
          </p>
          <p>
            You start with <strong>$100 balance</strong>, but the <strong>Ultra Premium Secret Item</strong> costs a lot more than you can afford.
          </p>
          <p>
            Maybe the shop's calculation system has a flaw.<br />
            Can you buy the secret item?
          </p>

          <div className="download-section">
            <a href="/Shop.exe" className="download-btn" download>
              Download Shop.exe
            </a>
          </div>

          <div className="flag-format">
            <p>Goal: Get the program to print the flag.</p>
            <p>Flag format: <code>Cracked{'{...}'}</code></p>
          </div>

          <div className="hints-section">
            <h3>Need a Hint?</h3>
            <button
              className="hint-btn"
              onClick={() => setHintLevel(prev => Math.min(prev + 1, hints.length))}
              disabled={hintLevel === hints.length}
            >
              {hintLevel < hints.length ? `Reveal Hint ${hintLevel + 1}` : "No more hints"}
            </button>

            {hintLevel > 0 && (
              <div className="hints-list">
                {hints.slice(0, hintLevel).map((hint, index) => (
                  <div key={index} className="hint-item">
                    <strong>Hint {index + 1}:</strong> {hint}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge0x17;

/*
=========================================================
ORGANIZER WRITEUP & SOLUTION PATH
=========================================================
Challenge Title: NeoMart Overflow
Category: Reverse Engineering / Binary Exploitation
Difficulty: Medium

Files Provided: Shop.exe

Goal:
Get the program to print the flag.
Expected flag format: Cracked{...}

Intended Solve Flow:
Step 1 — Run the program (Shop.exe)
         Menu appears: 1. Check Balance | 2. Buy Item | 3. Exit
         Balance starts at $100

Step 2 — View items
         Items include:
         4. Gaming Laptop - $100000
         5. Ultra Premium Secret Item - $2000000000

Step 3 — Analyze the code behavior
         The program uses 32-bit signed integers (ctypes.c_int32 in Python/C backend).
         When calculating (quantity * price), this can overflow.

Step 4 — Exploit integer overflow
         Players buy:
         Item: 4
         Quantity: 21475
         Because 21475 * 100000 = 2147500000. This is greater than the max signed 
         32-bit integer (2147483647), which wraps into a negative number.
         Subtracting a negative cost INCREASES the balance instead of decreasing it.

Step 5 — Buy the secret item
         After the overflow, the balance becomes very large.
         Now buy:
         Item: 5
         Quantity: 1

Step 6 — Flag appears
         Program prints the decoded final flag:
         Cracked{M0n3y_M0n3y_M0n3y}
=========================================================
*/