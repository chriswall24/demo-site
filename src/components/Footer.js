import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      {/* <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to recieve our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder='Your Email' className='footer-input' />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo">
              Shawi <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">LOGO © 2024</small>
          <div className="social-icons">
          <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/sharon.tadmor/"
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer" /* Add this for security reasons when opening new tabs */
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/sharon_tadmor/"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer" /* Add this for security reasons when opening new tabs */
            >
              <i className="fab fa-instagram"></i>
            </a>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
