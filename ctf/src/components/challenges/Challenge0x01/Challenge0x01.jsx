import React, { useEffect, useRef } from "react";
import "./Challenge1.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x01 = () => {


  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01アイウエオカキクケコサシスセソタチ@#$%&";
    const fontSize = 13;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff41";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = Math.random() > 0.98 ? "#ffffff" : "#00ff41";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 40);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/0x01/server.log";
    link.download = "server.log";
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

      {/* Matrix Rain Overlay */}
      <canvas ref={canvasRef} className="matrix-canvas" />

      {/* Scanline overlay */}
      <div className="scanlines" />

      {/* Challenge Content */}
      <div className="challenge-content">
        <div className="terminal-window">
          <div className="terminal-bar">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="terminal-title">root@ctf-server:~$</span>
          </div>

          <div className="terminal-body">
            <p className="terminal-line">
              <span className="prompt">$</span> cat challenge_info.txt
            </p>

            <h1 className="challenge-header">
              <span className="hex">0x02</span>
              <span className="arrow"> →</span>
              <span className="title"> Log Hunt</span>
            </h1>

            <div className="challenge-description">
              <p className="desc-line">
                <span className="bracket">[</span>
                <span className="label">MISSION</span>
                <span className="bracket">]</span>
              </p>
              <p className="desc-text">
                Hidden among ordinary records lies something unusual.<br />
                Look carefully through the details — what seems routine<br />
                may lead you to the flag.&nbsp;
                <span className="flag-icon">🚩</span>
              </p>
            </div>

            <div className="hint-box">
              <span className="hint-label">// HINT:</span>
              <span className="hint-text"> Not everything logged is meant to be seen.</span>
            </div>

            <p className="terminal-line blink-line">
              <span className="prompt">$</span> wget server.log
              <span className="cursor">█</span>
            </p>

            <button className="download-btn" onClick={handleDownload}>
              <span className="btn-icon">⬇</span>
              <span className="btn-text">Download server.log</span>
              <span className="btn-size">[ 4.2KB ]</span>
            </button>

            <p className="terminal-footer">
              <span className="prompt">$</span>{" "}
              <span className="footer-text">
                Flag format: <span className="flag-format">flag&#123;...&#125;</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge0x01;
