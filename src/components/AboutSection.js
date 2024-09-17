import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./AboutSection.css";

function AboutSection() {
  return (
    <div className="about-container">
      <div className="about-bio">
        <p>Your bio will go here, highlighting your journey as an artist, what you’ve accomplished, where you’ve studied, and what you’re passionate about.</p>
      </div>
    </div>
  );
}

export default AboutSection;
