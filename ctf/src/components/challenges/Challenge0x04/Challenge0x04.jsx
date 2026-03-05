import React, { useEffect, useRef, useState } from "react";
import "./Challenge4.css";
import bgVideo from "../video/video bg ctf.mp4";

const FAKE_COMMITS = [
  { hash: "a3f8c21", msg: "fix: remove sensitive data from config", time: "3 years ago" },
  { hash: "b91d4e7", msg: "feat: add authentication module", time: "3 years ago" },
  { hash: "cc72f03", msg: "chore: cleanup old files", time: "3 years ago" },
  { hash: "d04a1b9", msg: "init: initial commit", time: "3 years ago" },
];

/* ── Modal ─────────────────────────────────────────────────── */
const ChallengeModal = ({ onClose }) => {
  const [typed, setTyped] = useState("");
  const fullText = "$ cat challenge_info.txt";

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i < fullText.length) {
        setTyped(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(t);
      }
    }, 45);
    return () => clearInterval(t);
  }, []);

  const downloadFile = () => {
    const a = document.createElement("a");
    a.href = "/0x04/Challenge.zip";
    a.download = "Challenge.zip";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-terminal" onClick={(e) => e.stopPropagation()}>

        {/* Title bar */}
        <div className="modal-titlebar">
          <span className="mdot red" onClick={onClose} title="Close" style={{ cursor: "pointer" }} />
          <span className="mdot yellow" />
          <span className="mdot green" />
          <span className="modal-titlebar-label">root@ctf-server:~$</span>
        </div>

        {/* Typed command */}
        <div className="modal-cmd">
          {typed}<span className="modal-caret">█</span>
        </div>

        {/* Challenge header */}
        <div className="modal-header-row">
          <span className="modal-hex">0X04</span>
          <span className="modal-arrow">→</span>
          <span className="modal-chname">BURIED IN HISTORY</span>
        </div>

        {/* Mission block */}
        <div className="modal-mission-block">
          <div className="modal-mission-label">[ MISSION ]</div>
          <p className="modal-mission-text">
            The files you see are only the latest version.<br />
            If you dig through the project's past carefully,<br />
            you might uncover something that was{" "}
            <em>never meant to stay</em>... 🚩
          </p>
        </div>

        {/* Hint block */}
        <div className="modal-hint-block">
          <span className="modal-hint-label">// HINT: </span>
          <span className="modal-hint-text">
            Not everything committed is meant to be seen.
          </span>
        </div>

        {/* wget line */}
        <div className="modal-wget">
          $ wget Challenge.zip<span className="modal-caret2">█</span>
        </div>

        {/* Download button */}
        <button className="modal-download-btn" onClick={downloadFile}>
          ↓ Download Challenge.zip
          <span className="modal-file-size">[ ~2.4KB ]</span>
        </button>

        {/* Flag format */}
        <div className="modal-flag-format">$ Flag format: flag&#123;...&#125;</div>
      </div>
    </div>
  );
};

/* ── Main Page ─────────────────────────────────────────────── */
const Challenge0x04 = () => {
  const [glitch, setGlitch] = useState(false);
  const [commitLines, setCommitLines] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const terminalRef = useRef(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < FAKE_COMMITS.length) {
        const nextCommit = FAKE_COMMITS[i];
        setCommitLines((prev) => [...prev, nextCommit]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 4000);
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="challenge-wrapper">
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay" />
      <div className="scanlines" />

      <div className="challenge-content">
        <div className="header-row">
          <span className="challenge-tag">0x04</span>
          <h1 className={`challenge-title${glitch ? " glitch" : ""}`}>
            Buried in History
          </h1>
        </div>

        <p className="challenge-description">
          The files you see are only the latest version.<br />
          If you dig through the project's past carefully,<br />
          you might uncover something that was <em>never meant to stay</em>...
        </p>

        <div className="terminal" ref={terminalRef}>
          <div className="terminal-header">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
            <span className="terminal-title">git log --oneline</span>
          </div>
          <div className="terminal-body">
            {commitLines.map((c, i) => (
              c && (
                <div key={i} className="commit-line">
                  <span className="commit-hash">{c.hash}</span>
                  <span className="commit-msg">{c.msg}</span>
                  <span className="commit-time">{c.time}</span>
                </div>
              )
            ))}
            {commitLines.length === FAKE_COMMITS.length && (
              <div className="terminal-cursor">█</div>
            )}
          </div>
        </div>

        <button className="download-btn" onClick={() => setShowModal(true)}>
          <span className="btn-icon">⬇</span> DOWNLOAD CHALLENGE
        </button>

        <p className="challenge-hint">hint: the answer lies in what was deleted</p>
      </div>

      {showModal && <ChallengeModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Challenge0x04;
