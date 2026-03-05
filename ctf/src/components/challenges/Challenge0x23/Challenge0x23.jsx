import React, { useState, useEffect } from "react";
import "./Challenge23.css";
import bgVideo from "../video/video bg ctf.mp4";
import useTrash from "../trash";

const PCAP_URL = process.env.PUBLIC_URL + "/0x23/moderate_wireshark_flag_challenge.pcap";

const Challenge0x23 = () => {
  const { d } = useTrash("13");
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
        <h1 className="challenge-header">0x23 {"-> Network Forensics"}</h1>

        <p className="challenge-instruction">
          During a <span className="highlight">network forensic investigation</span>,
          analysts captured suspicious HTTP traffic from a server.
          <br /><br />
          The attacker transferred several text files named{" "}
          <span className="highlight">flag*.txt</span> over the network.
        </p>

        {/* Download Button */}
        <div className="download-container">
          <a
            href={PCAP_URL}
            download="moderate_wireshark_flag_challenge.pcap"
            className="download-button"
          >
            📥 Download PCAP File
          </a>
        </div>


        {submitted && !solved && (
          <p className="wrong-answer">✗ Incorrect. Recheck your analysis.</p>
        )}

        {solved && retrievedData && (
          <div className="flag">
            🎉 Flag: <span>{retrievedData}</span> 🎉
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenge0x23;