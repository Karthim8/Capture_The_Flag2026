import React, { useState } from "react";
import "./Challenge38.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x38 = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [msg,setMsg] = useState("");

  // hidden credentials
  const realUser = atob("Q1RG");
  const realPass = atob("Q1RGMDk4NzY1NDMyMQ==");

  // hidden flag parts
  const flagParts = [
    "Q1JBQ0tFRA==",
    "e1lvdUFyZQ==",
    "SW5mbHVlbmNl",
    "fQ=="
  ];

  const getFlag = () => flagParts.map(p => atob(p)).join("");

  const login = (e)=>{
    e.preventDefault();

    if(username === realUser && password === realPass){
      setMsg(getFlag());
    }else{
      setMsg("Incorrect username or password.");
    }
  };

  return (
    <div className="challenge-wrapper">

      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4"/>
      </video>

      <div className="insta-container">

        {/* LEFT PHONE IMAGE */}
        <div className="phone-preview">
          <img src="/homepage.png" alt="Instagram preview"/>
        </div>

        {/* RIGHT LOGIN PANEL */}
        <div className="login-area">

          <div className="login-card">

            <h1 className="logo">Instagram</h1>

            <form onSubmit={login}>

              <input
                type="text"
                placeholder="Phone number, username, or email"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />

              <button type="submit">Log In</button>

            </form>

            <div className="divider">
              <span></span>
              <p>OR</p>
              <span></span>
            </div>

            <p className="facebook">Log in with Facebook</p>
            <p className="forgot">Forgot password?</p>

            <p className="result">{msg}</p>

          </div>

          <div className="signup-card">
            Don't have an account? <span>Sign up</span>
          </div>

          <div className="app-section">
            <p>Get the app.</p>

            <div className="store-buttons">
              <img src="/apple.png" alt="app store"/>
              <img src="/google.png" alt="google play"/>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Challenge0x38;