import { useState, useEffect, useRef } from "react";

// Floating random digits background
const FloatingDigits = () => {
  const digits = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    val: Math.floor(Math.random() * 10000).toString(),
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 10 + Math.random() * 14,
    opacity: 0.06 + Math.random() * 0.12,
    duration: 8 + Math.random() * 14,
    delay: Math.random() * 8,
  }));
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {digits.map((d) => (
        <span
          key={d.id}
          style={{
            position: "absolute",
            left: `${d.x}%`,
            top: `${d.y}%`,
            fontSize: `${d.size}px`,
            color: "#00ff88",
            opacity: d.opacity,
            fontFamily: "'Courier New', monospace",
            fontWeight: "bold",
            animation: `floatDrift ${d.duration}s ${d.delay}s ease-in-out infinite alternate`,
          }}
        >
          {d.val}
        </span>
      ))}
    </div>
  );
};

export default function Challenge0x03() {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [shake, setShake] = useState(false);
  const [glitch, setGlitch] = useState(false);

  // Glitch title periodically
  useEffect(() => {
    const t = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  const handleSubmit = () => {
    if (!input.trim()) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div style={styles.root}>
      <FloatingDigits />

      {/* Outer neon border frame */}
      <div style={styles.frame}>
        <div style={styles.card}>
          {/* Title */}
          <h1 style={{ ...styles.title, ...(glitch ? styles.titleGlitch : {}) }}>
            <span style={styles.titleGlitchLayer1(glitch)}>0X03 -&gt; TRACK ME</span>
            <span style={styles.titleGlitchLayer2(glitch)}>0X03 -&gt; TRACK ME</span>
            0X03 -&gt; TRACK ME
          </h1>

          {/* Phone numbers */}
          <div style={styles.numbers}>
            9080668018/6379799143
          </div>

          {/* Input */}
          <div style={{ ...styles.inputWrap, ...(shake ? styles.shake : {}) }}>
            <input
              style={styles.input}
              type="text"
              placeholder="Enter text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
          </div>

          {/* Submit button */}
          <button style={styles.btn} onClick={handleSubmit}>
            SUBMIT
          </button>

          {submitted && (
            <div style={styles.feedback}>
              ✓ SUBMITTED: <span style={{ color: "#fff" }}>{input}</span>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

        @keyframes floatDrift {
          from { transform: translateY(0px) rotate(-1deg); }
          to   { transform: translateY(-18px) rotate(1deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 18px #00ff88, 0 0 40px rgba(0,255,136,0.3), inset 0 0 18px rgba(0,255,136,0.04); }
          50%       { box-shadow: 0 0 28px #00ff88, 0 0 60px rgba(0,255,136,0.45), inset 0 0 28px rgba(0,255,136,0.07); }
        }
        @keyframes titlePulse {
          0%, 100% { text-shadow: 0 0 10px #00ff88, 0 0 24px #00ff88, 0 0 50px rgba(0,255,136,0.4); }
          50%       { text-shadow: 0 0 16px #00ff88, 0 0 36px #00ff88, 0 0 70px rgba(0,255,136,0.6); }
        }
        @keyframes btnPulse {
          0%, 100% { box-shadow: 0 0 10px rgba(255,30,30,0.6), 0 0 24px rgba(255,30,30,0.3); }
          50%       { box-shadow: 0 0 18px rgba(255,30,30,0.9), 0 0 40px rgba(255,30,30,0.5); }
        }
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20%      { transform: translateX(-8px); }
          40%      { transform: translateX(8px); }
          60%      { transform: translateX(-5px); }
          80%      { transform: translateX(5px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  root: {
    minHeight: "100vh",
    background: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Share Tech Mono', 'Courier New', monospace",
    position: "relative",
    overflow: "hidden",
    padding: "20px",
  },
  frame: {
    position: "relative",
    zIndex: 10,
    borderRadius: "10px",
    padding: "4px",
    background: "transparent",
    boxShadow: "0 0 0 2px #00ff88, 0 0 30px #00ff88, 0 0 60px rgba(0,255,136,0.3)",
    animation: "pulseGlow 3s ease-in-out infinite",
  },
  card: {
    background: "rgba(0, 8, 4, 0.97)",
    borderRadius: "8px",
    padding: "50px 48px 44px",
    width: "clamp(320px, 70vw, 580px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "28px",
    position: "relative",
  },
  title: {
    fontSize: "clamp(22px, 5vw, 36px)",
    fontWeight: "bold",
    color: "#00ff88",
    letterSpacing: "4px",
    textTransform: "uppercase",
    margin: 0,
    textAlign: "center",
    animation: "titlePulse 2.5s ease-in-out infinite",
    position: "relative",
    userSelect: "none",
  },
  titleGlitch: {
    animation: "none",
    filter: "blur(0.5px)",
  },
  titleGlitchLayer1: (active) => ({
    position: "absolute",
    left: active ? "2px" : 0,
    top: 0,
    color: "#ff003c",
    opacity: active ? 0.7 : 0,
    clipPath: "polygon(0 15%, 100% 15%, 100% 38%, 0 38%)",
    pointerEvents: "none",
  }),
  titleGlitchLayer2: (active) => ({
    position: "absolute",
    left: active ? "-2px" : 0,
    top: 0,
    color: "#00f9ff",
    opacity: active ? 0.7 : 0,
    clipPath: "polygon(0 58%, 100% 58%, 100% 78%, 0 78%)",
    pointerEvents: "none",
  }),
  numbers: {
    fontSize: "clamp(15px, 3vw, 22px)",
    color: "#00ff88",
    letterSpacing: "2px",
    textAlign: "center",
    opacity: 0.9,
    textShadow: "0 0 8px rgba(0,255,136,0.5)",
  },
  inputWrap: {
    width: "100%",
  },
  shake: {
    animation: "shake 0.5s ease",
  },
  input: {
    width: "100%",
    background: "rgba(0,0,0,0.7)",
    border: "1.5px solid #00ff88",
    borderRadius: "5px",
    color: "#00ff88",
    fontFamily: "'Share Tech Mono', 'Courier New', monospace",
    fontSize: "16px",
    padding: "12px 18px",
    outline: "none",
    letterSpacing: "1px",
    boxSizing: "border-box",
    boxShadow: "0 0 8px rgba(0,255,136,0.2), inset 0 0 8px rgba(0,255,136,0.03)",
    caretColor: "#00ff88",
  },
  btn: {
    background: "#e01010",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    fontFamily: "'Share Tech Mono', 'Courier New', monospace",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "3px",
    padding: "12px 48px",
    cursor: "pointer",
    textTransform: "uppercase",
    animation: "btnPulse 2s ease-in-out infinite",
    transition: "transform 0.1s, background 0.15s",
  },
  feedback: {
    color: "#00ff88",
    fontSize: "13px",
    letterSpacing: "1px",
    animation: "fadeIn 0.4s ease",
    textAlign: "center",
  },
};
