import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import PopupModal from "./PopupModal";

const LoginPage = () => {
  const [teamId, setTeamId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [popup, setPopup] = useState({ show: false, message: "" });
  const navigate = useNavigate();

  const showPopup = (message) => setPopup({ show: true, message });
  const closePopup = () => {
    setPopup({ show: false, message: "" });
    navigate("/dashboard");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("api/auth/login", {
        username: teamId,
        password: password,
      });

      if (response.data.success) {
        // Store logged-in team ID in localStorage
        localStorage.setItem("loggedInTeam", teamId);
        showPopup("✅ Login Successful!");
      }
    } catch (err) {
      setError("❌ Invalid Team ID or Password");
    }
  };

  return (
    <div className="login-page">
      {popup.show && <PopupModal message={popup.message} onClose={closePopup} />}
      <div className="login-container">
        <div className="left-section">
          <h1>Byte Buster's Club</h1>
          <h2>Learn CyberSecurity</h2>
        </div>
        <div className="right-section">
          <h2>Start Hacking !!!</h2>
          <p>Master Cybersecurity. Build a strong foundation in cybersecurity.</p>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Team ID"
                value={teamId}
                onChange={(e) => setTeamId(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="start-button">
              Start Hacking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
