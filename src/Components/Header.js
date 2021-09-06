import React, { useState, useEffect } from "react";
import "../Styles/Components/Header.scss";
import { HashLink } from "react-router-hash-link";
import Fade from "react-reveal/Fade";

function Header() {
  const [headerBackground, setHeaderBackground] = useState("header");
  const navRef = React.useRef();
  navRef.current = headerBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 1;
      if (show) {
        setHeaderBackground("header-scroll");
      } else {
        setHeaderBackground("header");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [check, setCheck] = useState(false);
  const [checkStatus, setcheckStatus] = useState(true);

  function onCheckFalse() {
    setcheckStatus(true);
    setCheck(false);
  }

  function onCheckTrue() {
    setCheck(true);
    setcheckStatus(false);
  }

  return (
    <Fade top>
      <header className={[navRef.current]}>
        <HashLink className="header__img--container" to="/#">
          <img
            alt="Logo Imagen"
            className="header__img"
            src="https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/Icons%2Flogo.svg?alt=media&token=2f30006f-b94d-44e4-8681-9d20aaf3406a"
          />
          <p className="header__img--text">Ramón Ruiz</p>
        </HashLink>
        <nav className="header__nav">
          <ul className="header__nav--list">
            <li className="header__nav--item">
              <HashLink className="header__nav--link" to="/#sobre-mi">
                Sobre mí
              </HashLink>
            </li>
            <li className="header__nav--item">
              <HashLink className="header__nav--link" to="/#portafolio">
                Portafolio
              </HashLink>
            </li>
            <li className="header__nav--item">
              <HashLink className="header__nav--link" to="/#contacto">
                Hablemos
              </HashLink>
            </li>
            <li className="header__nav--item">
              <HashLink className="header__nav--link" to="/#testimonios">
                Testimonios
              </HashLink>
            </li>
          </ul>
        </nav>
        <nav className="header__nav-mobile">
          <input
            type="checkbox"
            id="header__nav-mobile--drop"
            checked={check}
            onClick={checkStatus ? onCheckTrue : onCheckFalse}
          />
          <label for="header__nav-mobile--drop">
            <span></span>
            <span></span>
            <span></span>
          </label>

          <ul className="header__nav-mobile--list">
            <li className="header__nav--item">
              <HashLink
                className="header__nav--link"
                id="one"
                to="/#sobre-mi"
                onClick={onCheckFalse}
              >
                Sobre mí
              </HashLink>
            </li>
            <li className="header__nav--item">
              <HashLink
                className="header__nav--link"
                to="/#portafolio"
                onClick={onCheckFalse}
              >
                Portafolio
              </HashLink>
            </li>
            <li className="header__nav--item">
              <HashLink
                className="header__nav--link"
                to="/#contacto"
                onClick={onCheckFalse}
              >
                Hablemos
              </HashLink>
            </li>
            <li className="header__nav--item">
              <HashLink
                className="header__nav--link"
                to="/#testimonios"
                onClick={onCheckFalse}
              >
                Testimonios
              </HashLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fade>
  );
}

export default Header;
