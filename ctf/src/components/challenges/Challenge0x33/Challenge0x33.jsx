import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./Challenge33.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x33 = () => {
  const [cookieName, setCookieName] = useState("");
  const [storedCookie, setStoredCookie] = useState(Cookies.get("flag") || ""); 
  const [loadedCookie, setLoadedCookie] = useState("");

  useEffect(() => {
    // Load value from .env and set state
    const envCookie = process.env.REACT_APP_0X33;
    setLoadedCookie(envCookie);
  }, []);

  const handleSearch = () => {
    if (cookieName.trim().toLowerCase() === loadedCookie) {
      const flag = process.env.REACT_APP_0X33FLAG;
      Cookies.set("flag", flag, { expires: 1, secure: true });
      setStoredCookie(flag);
      alert("Flag stored in cookies! Check DevTools.");
    } else {
      alert("Error: Incorrect cookie name!");
    }
  };

  return (
    <div className="challenge-wrapper">
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <button className="back-button" onClick={() => window.history.back()} >Back</button>
      <div className="challenge-content">
        <h1 className="challenge-header">0X33 → Bake Cookies</h1>
        <p className="challenge-instruction">Enter the correct cookie name to retrieve the flag.</p>

        <input
          type="text"
          value={cookieName}
          onChange={(e) => setCookieName(e.target.value)}
          placeholder="Enter cookie name"
          className="input-box"
        />
        <button onClick={handleSearch} className="search-btn">Submit</button>
      </div>
      <footer className="footer">@ ByteBuster's Club 2025</footer>
    </div>
  );
};

export default Challenge0x33;
