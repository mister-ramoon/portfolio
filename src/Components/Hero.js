import React from "react";
import "../Styles/Components/Hero.scss";
import githubIcon from "../Icons/Github.svg";
import twitterIcon from "../Icons/Twitter.svg";
import LinkedinIcon from "../Icons/Linkedin.svg";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";

function Hero() {
  return (
    <div>
      <section className="hero" id="about-me">
        <div className="hero__container content1">
          <div className="hero__img--container">
            <img
              className="hero__img"
              src="https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Favatar.jpeg?alt=media&token=cc87d48e-3177-453f-b475-bc1a347d49ca"
              alt="hero imagen"
            />
          </div>
        </div>
        <div className="hero__container content2">
          <div className="hero__title--container">
            <h1 className="hero__title--text">Ramón Ruiz</h1>
            <p className="hero__title--description">
              Frontend Developer 📱 | Platzi Master 💚 | Software Engineer 💻 |
              JavaScript 🟨 | React 🟦 | Node | CSS | SASS | Git
            </p>
          </div>
          <div className="hero__list--container">
            <ul className="hero__list">
              <li className="hero__list--item">
                <a
                  href="https://www.linkedin.com/in/ramonruizrocha/"
                  target="__blank"
                  className="hero__list--link"
                >
                  <img
                    className="hero__list--img"
                    alt="Social Icon"
                    src={LinkedinIcon}
                  />
                </a>
              </li>
              <li className="hero__list--item">
                <a
                  href="https://github.com/ramonruizdev"
                  target="__blank"
                  className="hero__list--link"
                >
                  <img
                    className="hero__list--img"
                    alt="Social Icon"
                    src={githubIcon}
                  />
                </a>
              </li>
              <li className="hero__list--item">
                <a
                  href="https://twitter.com/ramonruizdev"
                  target="__blank"
                  className="hero__list--link"
                >
                  <img
                    className="hero__list--img"
                    alt="Social Icon"
                    src={twitterIcon}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="hero__cv">
            <a
              className="hero__cv--link"
              href="https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/files%2FCV-Frontend-RamonRuiz.pdf?alt=media&token=15c54e2f-c296-42b8-9117-bef32f600b40"
              target="__blank"
            >
              <button className="hero__cv--btn">Download CV</button>
            </a>
          </div>
        </div>
      </section>
      <About />
      <Experience />
      <Education />
    </div>
  );
}

export default Hero;
