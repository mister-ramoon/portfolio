import React from "react";
import "../Styles/Components/Hero.scss";
import githubIcon from "../Icons/Github.svg";
import twitterIcon from "../Icons/Twitter.svg";
import LinkedinIcon from "../Icons/Linkedin.svg";
import PlatziIcon from "../Icons/Platzi.svg";
import Fade from "react-reveal/Fade";

function Hero() {
  return (
    <Fade bottom cascade>
      <section className="hero" id="sobre-mi">
        <div className="hero__container content1">
          <div className="hero__img--container">
            <img
              className="hero__img"
              src="https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Fimg.jpeg?alt=media&token=4171999c-50c5-4892-8679-c7eecc6790bf"
              alt="hero imagen"
            />
          </div>
        </div>
        <div className="hero__container content2">
          <div className="hero__title--container">
            <h2 className="hero__title--text">
              ¡Hola! Soy Ramón Ruiz Un Creador Frontend De Sitios Web.
            </h2>
            <p className="hero__title--description">
              Programador | Frontend Developer | Estudiante de Platzi |
              Freelancer
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
                  href="https://platzi.com/p/ramonruiz/"
                  target="__blank"
                  className="hero__list--link"
                >
                  <img
                    className="hero__list--img"
                    alt="Social Icon"
                    src={PlatziIcon}
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
              href="https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/files%2Fcv.pdf?alt=media&token=c3de0a8d-b076-48b9-9ae5-b6433b7ca18c"
              target="__blank"
            >
              <button className="hero__cv--btn">Curriculum</button>
            </a>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default Hero;
