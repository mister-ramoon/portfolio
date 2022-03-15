import React, { useState, useEffect } from "react";
import "../Styles/Components/Header.scss";
import { HashLink } from "react-router-hash-link";
import LogoIcon from "../Icons/logo.svg";

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
    <header className={[navRef.current]}>
      <HashLink className="header__img--container" to="/#">
        <img alt="Logo Imagen" className="header__img" src={LogoIcon} />
      </HashLink>
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li className="header__nav--item">
            <HashLink className="header__nav--link" to="/#about-me">
              About Me
            </HashLink>
          </li>
          <li className="header__nav--item">
            <HashLink className="header__nav--link" to="/#portfolio">
              Portfolio
            </HashLink>
          </li>
          <li className="header__nav--item">
            <HashLink className="header__nav--link" to="/#contact-me">
              Contact Me
            </HashLink>
          </li>
          <li className="header__nav--item">
            <HashLink className="header__nav--link" to="/#testimonials">
              Testimonials
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
              to="/#about-me"
              onClick={onCheckFalse}
            >
              About Me
            </HashLink>
          </li>
          <li className="header__nav--item">
            <HashLink
              className="header__nav--link"
              to="/#portfolio"
              onClick={onCheckFalse}
            >
              Portfolio
            </HashLink>
          </li>
          <li className="header__nav--item">
            <HashLink
              className="header__nav--link"
              to="/#contact-me"
              onClick={onCheckFalse}
            >
              Contact Me
            </HashLink>
          </li>
          <li className="header__nav--item">
            <HashLink
              className="header__nav--link"
              to="/#testimonials"
              onClick={onCheckFalse}
            >
              Testimonials
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
