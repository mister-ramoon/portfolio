import React from "react";
import "../Styles/Components/Portafolio.scss";

function Portafolio() {
  return (
    <div className="portafolio__content" id="portafolio">
      <h2 className="title">Proyectos</h2>
      <section className="portafolio">
        <div className="portafolio__project">
          <div className="porafolio__img--container">
            <img
              className="portafolio__img"
              alt="Proyect Imagen"
              src="https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Fgoogle-clone.png?alt=media&token=0b731003-dac0-4f24-9f91-f28fbb038870"
            />
          </div>
          <div className="portafolio__text">
            <h3 className="portafolio__text--title">Google Clone</h3>
            <p className="portafolio__text--description">
              En este proyecto cree un clon de la página home de Google usando
              puro HTML y CSS
            </p>
            <a className="portafolio__link" target="_blank" href="/">
              <button className="portafolio__btn">Ver Proyecto</button>
            </a>
            <a className="portafolio__link" target="_blank" href="/">
              <button className="portafolio__btn">Ver Código</button>
            </a>
          </div>
        </div>
      </section>
      <section className="portafolio">
        <div className="portafolio__project">
          <div className="portafolio__text">
            <h3 className="portafolio__text--title">Google Clone</h3>
            <p className="portafolio__text--description">
              En este proyecto cree un clon de la página home de Google usando
              puro HTML y CSS
            </p>
            <a className="portafolio__link" target="_blank" href="/">
              <button className="portafolio__btn">Ver Proyecto</button>
            </a>
            <a className="portafolio__link" target="_blank" href="/">
              <button className="portafolio__btn">Ver Código</button>
            </a>
          </div>
          <div className="porafolio__img--container">
            <img
              className="portafolio__img"
              alt="Proyect Imagen"
              src="https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Fgoogle-clone.png?alt=media&token=0b731003-dac0-4f24-9f91-f28fbb038870"
            />
          </div>
        </div>
      </section>
      <section className="portafolio">
        <div className="portafolio__project">
          <div className="porafolio__img--container">
            <img
              className="portafolio__img"
              alt="Proyect Imagen"
              src="https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Fgoogle-clone.png?alt=media&token=0b731003-dac0-4f24-9f91-f28fbb038870"
            />
          </div>
          <div className="portafolio__text">
            <h3 className="portafolio__text--title">Google Clone</h3>
            <p className="portafolio__text--description">
              En este proyecto cree un clon de la página home de Google usando
              puro HTML y CSS
            </p>
            <a className="portafolio__link" target="_blank" href="/">
              <button className="portafolio__btn">Ver Proyecto</button>
            </a>
            <a className="portafolio__link" target="_blank" href="/">
              <button className="portafolio__btn">Ver Código</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portafolio;
