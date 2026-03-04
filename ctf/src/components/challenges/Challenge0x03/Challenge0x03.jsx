import React, { useState, useEffect, useRef } from "react";
import "./Challenge3.css";
import bgVideo from "../video/video bg ctf.mp4";

const GLITCH_CHARS = "█▓▒░▪▫■□▬▲▼◆◇○●";

const GlitchText = ({ text }) => {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      if (frame < 12) {
        setDisplay(
          text
            .split("")
            .map((c, i) =>
              Math.random() < 0.25
                ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
                : c
            )
            .join("")
        );
        frame++;
      } else {
        setDisplay(text);
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [text]);
  return <span className="glitch-text">{display}</span>;
};

const Challenge0x03 = () => {
  const [glitchKey, setGlitchKey] = useState(0);
  const noiseRef = useRef(null);

  // Animated noise canvas for the broken image effect
  useEffect(() => {
    const canvas = noiseRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = 320;
    canvas.height = 200;

    let animId;
    const drawNoise = () => {
      const imageData = ctx.createImageData(320, 200);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() > 0.92 ? 255 : Math.floor(Math.random() * 40);
        data[i] = v;
        data[i + 1] = Math.random() > 0.95 ? 80 : v * 0.1;
        data[i + 2] = v * 0.05;
        data[i + 3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);

      // Horizontal glitch bars
      for (let g = 0; g < 3; g++) {
        const y = Math.floor(Math.random() * 200);
        const h = Math.floor(Math.random() * 8) + 2;
        ctx.fillStyle = `rgba(255, ${Math.random() * 60}, 0, ${Math.random() * 0.6})`;
        ctx.fillRect(0, y, 320, h);
      }

      animId = requestAnimationFrame(drawNoise);
    };
    drawNoise();
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/0x03/challenge";
    link.download = "challenge";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setGlitchKey((k) => k + 1);
  };

  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Red scanline overlay */}
      <div className="scanlines" />
      <div className="vignette" />

      {/* Content */}
      <div className="challenge-content">

        {/* Header */}
        <div className="challenge-header">
          <span className="hex-label">0x03</span>
          <span className="arrow-sep">→</span>
          <GlitchText key={glitchKey} text="BROKEN IMAGE" />
        </div>

        {/* Broken image preview */}
        <div className="broken-frame">
          <canvas ref={noiseRef} className="noise-canvas" />
          <div className="broken-overlay">
            <span className="broken-icon">⚠</span>
            <span className="broken-label">IMAGE CORRUPTED</span>
            <span className="broken-bytes">0x00 0x00 FF E0 ...</span>
          </div>
        </div>

        {/* Description */}
        <div className="desc-card">
          <p className="desc-badge">🔴 FORENSICS — EASY</p>
          <p className="desc-text">
            A glimpse of paradise lies inside a broken image that refuses to open.<br />
            Repair what’s missing, restore the view, and uncover the hidden flag.
          </p>
        </div>

        {/* Hint strip */}
        <div className="hint-strip">
          <span className="hint-icon">💡</span>
          <span className="hint-text">
            <strong>Hint:</strong> What makes a JPEG a JPEG? Check the magic bytes.
          </span>
        </div>

        {/* Download */}
        <button className="download-btn" onClick={handleDownload}>
          <span className="dl-icon">⬇</span>
          <span className="dl-main">
            <span className="dl-title">Download Challenge File</span>
            <span className="dl-sub">challenge &nbsp;·&nbsp; no extension &nbsp;·&nbsp; corrupted</span>
          </span>
          <span className="dl-badge">ch3</span>
        </button>

      </div>
    </div>
  );
};

export default Challenge0x03;
