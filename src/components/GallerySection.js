import React from "react";
import "../App.css";
import "./GallerySection.css";
import Img1 from '../images/soloblack.jpg'
import Img2 from '../images/soloblackclose.jpg'
import Img3 from '../images/blackduo.jpg'
import Img4 from '../images/confidentsolo.jpg'
import Img5 from '../images/projection.jpg'

function GallerySection() {
  return (
    <div class="gallery-container">
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery-wrapper">
      <div class="gallery">
        <img src={Img1} alt="Image 1" />
        <img src={Img2} alt="Image 2" />
        <img src={Img3} alt="Image 3" />
        <img src={Img4} alt="Image 4" />
        <img src={Img5} alt="Image 5" />
      </div>
      </div>
      <div className="gallery-wrapper">
      <div class="gallery">
        <img src={Img1} alt="Image 1" />
        <img src={Img2} alt="Image 2" />
        <img src={Img3} alt="Image 3" />
        <img src={Img4} alt="Image 4" />
        <img src={Img5} alt="Image 5" />
      </div>
      </div>
    </div>
  );
}

export default GallerySection;
