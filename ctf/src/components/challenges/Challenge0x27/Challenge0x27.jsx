import React from "react";
import "./Challenge27.css";
import bgVideo from "../video/video bg ctf.mp4"; // Ensure you have the video file in the correct path
//import challengeAudio from "public/audio/shinchan_song.mp3"; // Ensure you have the audio file in the correct path
import audioFile from './audio/s.mp3';
const Challenge0x27 = () => {
  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content">
        <h1 className="challenge-header">0x27 {'-> audio file'}</h1>
        <p className="challenge-instruction">An audio file contains hidden clues. Can you find the flag?</p>
        
        {/* Download Audio Button */}
        <div className="download-container">
          <a href={audioFile} download className="download-button">
            🎵 Download Audio File
          </a>
        </div>
      </div>
    </div>
  );
};

export default Challenge0x27;
