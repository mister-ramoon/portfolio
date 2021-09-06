import React from "react";
import "../Styles/Components/Footer.scss";
import githubIcon from "../Icons/Github.svg";
import twitterIcon from "../Icons/Twitter.svg";
import LinkedinIcon from "../Icons/Linkedin.svg";
import PlatziIcon from "../Icons/Platzi.svg";
import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <Fade top>
      <div className="footer__container">
        <footer className="footer">
          <div className="footer__copy">
            <h5 className="footer__copy--text">Creado por @ramonruizdev</h5>
          </div>
          <ul className="hero__list">
            <li className="hero__list--item">
              <a href="/" target="_blank" className="hero__list--link">
                <img
                  className="hero__list--img"
                  alt="Social Icon"
                  src={LinkedinIcon}
                />
              </a>
            </li>
            <li className="hero__list--item">
              <a href="/" target="_blank" className="hero__list--link">
                <img
                  className="hero__list--img"
                  alt="Social Icon"
                  src={githubIcon}
                />
              </a>
            </li>
            <li className="hero__list--item">
              <a href="/" target="_blank" className="hero__list--link">
                <img
                  className="hero__list--img"
                  alt="Social Icon"
                  src={PlatziIcon}
                />
              </a>
            </li>
            <li className="hero__list--item">
              <a href="/" target="_blank" className="hero__list--link">
                <img
                  className="hero__list--img"
                  alt="Social Icon"
                  src={twitterIcon}
                />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </Fade>
  );
}

export default Footer;
