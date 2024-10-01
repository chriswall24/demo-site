import React from "react";
import "../App.css";
import "./AboutSection.css";
import CoupleImage from "../images/chrischensinging.jpeg"

function AboutSection() {
  return (
    <div className="about-container">
      <div className="about-title">
        <h1>About</h1>
      </div>
      <div className="about-card-container">
        <div className="about-bio">
          <p>Your bio will go here, highlighting your journey as an artist, what you’ve accomplished, where you’ve studied, and what you’re passionate about.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod turpis non sem fermentum, ut facilisis nisi aliquet. Praesent hendrerit turpis orci, nec luctus libero tristique ac. Aenean volutpat scelerisque nulla, eget dignissim velit suscipit vel. Vivamus condimentum, arcu sed vulputate dapibus, leo lorem blandit ex, at ultricies erat enim in justo. Proin sed felis augue. </p>
          <p>Duis fringilla efficitur tortor sit amet suscipit. Vestibulum consequat massa vel ex scelerisque, a ultrices sapien eleifend. Donec fermentum, enim et dictum ornare, nisl orci varius arcu, vel interdum est lacus at enim. Cras vel vulputate turpis. Morbi venenatis, velit eget tempus tempor, erat odio porta velit, id lacinia est quam sed arcu. Proin feugiat justo ut nisi ultricies, sit amet aliquam ligula tristique. Pellentesque pharetra vestibulum dolor, nec tempor lectus lobortis eget.</p>
        </div>
        <div className="about-img">
          <img src={CoupleImage} alt='Bio Pic' />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
