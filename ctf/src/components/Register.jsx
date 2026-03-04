import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import PopupModal from "./PopupModal";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    team_name: "",
    phone: "",
    year: "",
    department: "",
    college: "",
    member1: "",
    member2: "",
    member3: "",
  });
  const [popup, setPopup] = useState({ show: false, message: "", onClose: null });

  const showPopup = (message, onClose) => {
    setPopup({ show: true, message, onClose: onClose || (() => setPopup({ show: false, message: "", onClose: null })) });
  };

  const closePopup = () => setPopup({ show: false, message: "", onClose: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "year" ? Number(value) || "" : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        showPopup(
          `✅ Registration Successful!\n\nYour Team ID is: ${data.team_id}\n\n⚠️ Save this ID — you need it to log in!`,
          () => {
            closePopup();
            navigate("/categories");
          }
        );
      } else {
        showPopup(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      console.error("❌ Registration Failed:", error);
      showPopup("❌ Server error. Please try again later.");
    }
  };

  return (
    <div className="register-container">
      {popup.show && <PopupModal message={popup.message} onClose={popup.onClose} />}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <h1>Register your team for the CTF</h1>
      <br />
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input type="text" name="member1" placeholder="Member-1" value={formData.member1} onChange={handleChange} required />
          <input type="text" name="member2" placeholder="Member-2" value={formData.member2} onChange={handleChange} />
        </div>
        <div className="form-row">
          <input type="text" name="member3" placeholder="Member-3" value={formData.member3} onChange={handleChange} />
          <input type="text" name="team_name" placeholder="Team Name" value={formData.team_name} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <select name="department" value={formData.department} onChange={handleChange} required>
            <option value="">Department</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="AIML">AIML</option>
            <option value="CSD">CSD</option>
            <option value="MECH">MECH</option>
            <option value="MCT">MCT</option>
            <option value="BME">BME</option>
            <option value="FT">FT</option>
          </select>
          <select name="year" value={formData.year} onChange={handleChange} required>
            <option value="">Year</option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
          </select>
        </div>
        <div className="form-row">
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input type="text" name="college" placeholder="College Name" value={formData.college} onChange={handleChange} required />
        </div>
        <p>Never accept a Defeat unless Trying it.</p>
        <br />
        <button type="submit" className="start-hacking">Start Hacking...</button>
      </form>
    </div>
  );
};

export default Register;
