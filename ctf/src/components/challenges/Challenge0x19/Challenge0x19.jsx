import React, { useState, useEffect } from "react";
import "./Challenge19.css";
import bgVideo from "../video/video bg ctf.mp4";
import useTrash from "../trash";

const TARGET_URL = "http://165.227.106.113/post.php";

const Challenge0x19 = () => {
  const { d, error } = useTrash("10");
  const [retrievedData, setRetrievedData] = useState(null);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [shake, setShake] = useState(false);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    if (d) setRetrievedData(d);
  }, [d]);

  const handleSubmit = () => {
    if (!answer.trim()) return;

    if (
      retrievedData &&
      answer.trim().toLowerCase() === retrievedData.trim().toLowerCase()
    ) {
      setSolved(true);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
    setSubmitted(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
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
        <h1 className="challenge-header">0x19 {"-> POST Auth"}</h1>

        <p className="challenge-instruction">
          This website requires authentication, via <span className="highlight">POST</span>.
          However, it seems as if someone has defaced our site.
          <br />
          <br />
          Maybe there is still some way to authenticate?
        </p>

        {/* Target URL Card */}
        <div className="url-card">
          <span className="url-label">TARGET</span>
          <a
            href={TARGET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="url-link"
          >
            {TARGET_URL}
          </a>
        </div>



        {/* Wrong answer feedback */}
        {submitted && !solved && (
          <p className="wrong-answer">✗ Incorrect. Keep probing.</p>
        )}

        {/* Flag Display */}
        {solved && retrievedData && (
          <div className="flag">
            🎉 Flag: <span>{retrievedData}</span> 🎉
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenge0x19;