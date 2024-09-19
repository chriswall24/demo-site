import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-1.mp4" /> */}
      <h1>Chenzie</h1>
      <p>Mezzo Soprano</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          <Link to='/about'>
          MORE INFO
          </Link>
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          PERFORMANCES <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
