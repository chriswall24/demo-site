import React from "react";
import "../App.css";
import "./AboutSection.css";
import ShawiFabian from "../images/ShawiFabian.jpg"

function AboutSection() {
  return (
    <div className="about-container">
      <div className="about-title">
        <h1>About</h1>
      </div>
      <div className="about-card-container">
        <div className="about-bio">
          <p>Sharon Tadmor (b.1998), soprano, was born in Brussels, Belgium. She started her musical education as a recorder player at the Giv’ataim conservatory and afterward at the Tel-Aviv conservatory. She began learning vocal practice at the age of 14. In 2016 she graduated with excellence from Thelma Yellin High School of Arts. Sharon has obtained a Bachelor’s degree from the Buchmann-Mehta School of Music at Tel Aviv University, under the instruction of Prof. Sharon Rostorf-Zamir. Currently, she has started her Master’s degree at the DNOA (Dutch National Opera Academy) in the Netherlands.</p>
          <p>Her repertoire includes the role of Pamina and Queen of the night from “Die Zauberflöte”, Mrs. Gobineau from “The Medium”, Ms. Pinkerton from ”The Old Maid and the Thief” and S.Michele from “La Caduta Dell’angeli” by Francesco Rossi. </p>
          <p>Sharon’s concert performances include  Bach’s “Magnificat” and Mass in b minor, Charpentier’s “Te Deum”, Jesu Meine Freude” by Buxtehude, Schnittke’s Requiem, and cantatas by Bach and Mendelssohn. She performed with leading Israeli orchestras including Phoenix Ensemble, The Barocadde Ensemble, and the Israel Chamber Orchestra, under conductors including Ronen Borshevsky, Yi-An Xu, Yizhar Kershon, and Andres Mustonen.</p>
          <p>Her awards include first prize at the Clara Schumann (and other female composers of her generation competition), (2019), third place in the Paul Ben Haim competition (2020), Givatayim conservatory Excellence Scholarship (2013), the Buchmann-Mehta School of Music Excellence Scholarship (2018-2021), and the America-Israel Cultural Foundation scholarship (2016-2017, 2020-2021).</p>
          <p>Sharon has participated in the music fest – Perugia, which was held in Perugia, Italy (2015), and the Israeli Vocal Arts institute’s summer program for young artists (2019).</p>
        </div>
        <div className="about-img">
          <img src={ShawiFabian} alt='Bio Pic' />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
