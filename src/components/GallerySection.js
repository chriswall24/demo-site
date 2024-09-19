import React from "react";
import "../App.css";
import "./GallerySection.css";
import Img1 from '../images/img-1.jpg'
import Img2 from '../images/img-2.jpg'
import Img3 from '../images/img-3.jpg'
import Img4 from '../images/img-4.jpg'

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
      </div>
      </div>
    </div>
  );
}

export default GallerySection;
