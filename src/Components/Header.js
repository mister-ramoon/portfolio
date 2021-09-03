import React, { useState, useEffect } from "react";
import "../Styles/Components/Header.scss";

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

  return (
    <header className={[navRef.current]}>
      <a className="header__img--container" href="/">
        <img
          alt="Logo Imagen"
          className="header__img"
          src="https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/Icons%2Flogo.svg?alt=media&token=2f30006f-b94d-44e4-8681-9d20aaf3406a"
        />
        <p className="header__img--text">Ramón Ruiz</p>
      </a>
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li className="header__nav--item">
            <a className="header__nav--link" href="/">
              Sobre mí
            </a>
          </li>
          <li className="header__nav--item">
            <a className="header__nav--link" href="/">
              Portafolio
            </a>
          </li>
          <li className="header__nav--item">
            <a className="header__nav--link" href="/">
              Hablemos
            </a>
          </li>
        </ul>
      </nav>
      <nav className="header__nav-mobile">
        <input type="checkbox" id="header__nav-mobile--drop" />
        <label for="header__nav-mobile--drop">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <ul className="header__nav-mobile--list">
          <li className="header__nav--item">
            <a className="header__nav--link" href="/">
              Sobre mí
            </a>
          </li>
          <li className="header__nav--item">
            <a className="header__nav--link" href="/">
              Portafolio
            </a>
          </li>
          <li className="header__nav--item">
            <a className="header__nav--link" href="/">
              Hablemos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
