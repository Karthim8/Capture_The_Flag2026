import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";
import PopupModal from "./PopupModal";

const Navbar = () => {
  const navigate = useNavigate();
  const [popup, setPopup] = useState({ show: false, message: "" });

  const showPopup = (message) => setPopup({ show: true, message });
  const closePopup = () => setPopup({ show: false, message: "" });

  const handleLogout = async () => {
    try {
      await axios.post("api/auth/logout");
      localStorage.removeItem("loggedInTeam"); // Clear local storage
      navigate("/"); // Redirect to home
      showPopup("Logout Success");
    } catch (err) {
      console.error("❌ Logout failed", err);
      showPopup("❌ Logout failed");
    }
  };

  return (
    <>
      {popup.show && <PopupModal message={popup.message} onClose={closePopup} />}
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/scoreboard">Scoreboard</Link>
          </li>
          <li>
            <Link to="/categories">Challenges</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="#" onClick={handleLogout} className="logout-link">
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
