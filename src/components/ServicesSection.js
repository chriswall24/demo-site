import React from "react";
import "../App.css";
import "./ServicesSection.css";
import Img1 from '../images/soloblack.jpg'
import Img2 from '../images/img-2.jpg'
import Img3 from '../images/img-3.jpg'

function ServicesSection() {
  return (
    <div class="services-container">
      <div class="service-card">
        <img src={Img1} alt="Service 1 Image" />
        <h2 class="service-title">Singer</h2>
        <p class="service-medium">Online/In-person - $30/30min</p>
        <p class="service-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          lacus ut leo tincidunt viverra.
        </p>
      </div>

      <div class="service-card">
        <img src={Img2} alt="Service 2 Image" />
        <h2 class="service-title">Producer</h2>
        <p class="service-medium">Online/In-Person - $50/50min</p>
        <p class="service-description">
          Curabitur ac libero eget magna pellentesque fermentum. Integer a est
          ac quam scelerisque feugiat.
        </p>
      </div>

      <div class="service-card">
        <img src={Img3} alt="Service 3 Image" />
        <h2 class="service-title">Balloon Animal Maker</h2>
        <p class="service-medium">Online - Free!</p>
        <p class="service-description">
          Aenean dictum libero ut magna fermentum, sed accumsan urna dictum.
          Proin suscipit felis ac ex euismod tristique.
        </p>
      </div>
    </div>
  );
}

export default ServicesSection;
