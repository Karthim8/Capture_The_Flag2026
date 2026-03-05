import React from "react";
import "./Challenge27.css";
import bgVideo from "../video/video bg ctf.mp4";

const Challenge0x27 = () => {

  return (
    <div className="challenge-wrapper">

      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Challenge Card */}
      <div className="challenge-content">

        <h1 className="challenge-header">
          0x27 {"-> The Digital World"}
        </h1>

        <div className="challenge-instruction">

          <p>
            The internet has become an essential part of our everyday lives,
            connecting people, systems, and information across the globe.
          </p>

          <p>
            As technology continues to grow, learning <strong><em>about  </em></strong> 
            how the digital world operates is becoming increasingly important.
          </p>

          <p>
            At the same time, understanding the importance of 
            <strong><em> security</em></strong> helps protect information,
            privacy, and digital identities from potential threats.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Challenge0x27;