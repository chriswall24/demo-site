import React from "react";
import "../../App.css";
import GallerySection from "../GallerySection";
import Footer from '../Footer';


export default function Gallery() {
  return (
    <div className="page-container">
      {/* <h1 className="gallery"> GALLERY</h1> */}
      <GallerySection />
      <Footer />
    </div>
  );
}
