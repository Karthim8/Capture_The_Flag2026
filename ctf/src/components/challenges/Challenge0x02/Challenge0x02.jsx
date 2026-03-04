import React from "react";
import "./Challenge2.css"; 
import bgVideo from "../video/video bg ctf.mp4"; // Ensure you have the video file in the correct path

const GeoCipherX = () => {
  return (
    <div className="challenge-wrapper">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Challenge Content */}
      <div className="challenge-content" style={{ textAlign: "center", fontSize: "2rem" }}>
        <h1 className="challenge-header">0x02 {"->"} Mr.WorldWide</h1>
        <p className="challenge-instruction">A musician left us a message. What's it mean?</p>
        <p className="challenge-flag">
          {"CRACKED{(37.774929, -122.419418)(51.165691, 10.451526)(55.755825, 37.617298)(41.878113, -87.629799)(48.856613, 2.352222)(-33.868820, 151.209290) (35.689487, 139.691711)(40.712776, -74.005974)(52.520008, 13.404954)(59.329323, 18.068581)(34.052235, -118.243683)(50.110924, 8.682127)}"}
        </p>
      </div>
    </div>
  );
};

export default GeoCipherX;
