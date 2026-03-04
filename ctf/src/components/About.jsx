import React from "react";
import "./About.css"; 
import backgroundVideo from "./video/video bg ctf.mp4"; // Make sure the path is correct
import Dharshini from "./photos/Dharshini.png";
import Harinee from "./photos/Harinee.jpeg"
import Annapoorani from "./photos/Annapoorani.png"
import Aravinth from "./photos/Aravinth.png"
const About = () => {
  return (
    <div className="about-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* About Content */}
      <div className="about-container">
        <h1 className="about-title">Byte Busters CTF Event</h1>
        <p className="about-subtitle">Welcome to an exciting Capture The Flag event!</p>

        <h2>Contact</h2>
        <p>For any queries, concerns, or clarifications, please contact the event organizers:</p> <br />
        {/* <ul>
          <li><strong>Kishore Kumar A</strong> </li>
          <li><strong>Harshini S</strong> </li>
          <li><strong>Harinee VS</strong> </li>
          <li><strong>Dharshini R</strong> </li>
          <li><strong>Annapoorani D</strong> </li>
          <li><strong>Aravinth R</strong> </li>
        </ul> */}
<h2>Event Organizers</h2>
<div className="about-images-container">
  {/* <div className="about-person">
    <div className="about-image">
      <img src="./images/kishore.jpg" alt="" />
    </div>
    <p className="person-name">Kishore Kumar</p>
    <p className="person-role">Lead Organizer</p>
  </div>
  
  <div className="about-person">
    <div className="about-image">
      <img src="./images/harshini.jpg" alt="" />
    </div>
    <p className="person-name">Harshini S</p>
    <p className="person-role">Event Coordinator</p>
  </div> */}

  <div className="about-person">
    <div className="about-image">
      <img src={Harinee} alt="" />
    </div>
    <p className="person-name">Harinee VS</p>
    <p className="person-role">Organizers</p>
  </div>

  <div className="about-person">
    <div className="about-image">
      <img src={Dharshini} alt="" />
    </div>
    <p className="person-name">Dharshini R</p>
    <p className="person-role">Organizers</p>
  </div>

  <div className="about-person">
    <div className="about-image">
      <img src={Annapoorani} alt="" />
    </div>
    <p className="person-name">Annapoorani</p>
    <p className="person-role">Organizers</p>
  </div>

  <div className="about-person">
    <div className="about-image">
      <img src={Aravinth} alt="" />
    </div>
    <p className="person-name">Aravinth R</p>
    <p className="person-role">Organizers</p>
  </div>
</div>


        <h2>Table of Contents</h2>
        <ol>
          <li>Introduction</li>
          <li>Getting Started</li>
          <li>Rules and Guidelines</li>
          <li>Scoring</li>
          <li>Hints and Assistance</li>
          <li>Reporting Issues</li>
          <li>Prizes</li>
          <li>Contact</li>
        </ol>

        <h2>1. Introduction</h2>
        <p>
          Welcome to our Capture The Flag (CTF) event! This competition is designed to test your cybersecurity skills, 
          problem-solving abilities, and creativity. The objective is to find hidden flags within various challenges, each representing a unique security vulnerability or puzzle.
        </p>

        <h2>2. Getting Started</h2>
        <ul>
          <li><strong>Registration:</strong> Ensure you have registered for the event. If not, contact the organizers.</li>
          <li><strong>Accessing Challenges:</strong> Log in to the CTF platform using your credentials.</li>
          <li><strong>Selecting Challenges:</strong> Browse and choose challenges that interest you.</li>
        </ul>

        <h2>3. Rules and Guidelines</h2>
        <ul>
          <li><strong>Fair Play:</strong> Cheating, sharing answers, or exploiting the platform is prohibited.</li>
          <li><strong>Legal Compliance:</strong> Stay within legal boundaries. Unauthorized access outside the event scope is forbidden.</li>
          <li><strong>Respect:</strong> Treat all participants and organizers with courtesy.</li>
        </ul>

        <h2>4. Scoring</h2>
        <ul>
          <li><strong>Flag Submission:</strong> Each challenge contains a hidden flag. Submit it on the platform for points.</li>
          <li><strong>Scoring System:</strong> Points are awarded based on challenge difficulty.</li>
          <li><strong>Leaderboard:</strong> Track rankings based on total points earned.</li>
        </ul>

        <h2>5. Hints and Assistance</h2>
        <ul>
          <li><strong>Hints:</strong> If stuck, request a hint via the platform.</li>
          <li><strong>Community Forums:</strong> Engage with participants and discuss strategies.</li>
        </ul>

        <h2>6. Reporting Issues</h2>
        <ul>
          <li><strong>Technical Issues:</strong> Report platform problems to the organizers.</li>
          <li><strong>Security Concerns:</strong> Report vulnerabilities found in challenges.</li>
        </ul>

        <h2>7. Prizes</h2>
        <p>Winners will receive exciting prizes! Details will be communicated at the end of the event.</p>
        <strong>
        <p className="footer">© Byte Busters Club 2025</p>
        </strong>
      </div>
    </div>
  );
};

export default About;
