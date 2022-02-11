import React from "react";
import "../Styles/Components/Portafolio.scss";

const projects = [
  {
    id: 1,
    title: "Google Clone",
    description:
      "Google Clone es una copia responsive del buscador en Google hecho enteramente con HTML y CSS.",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Fgoogle-clone.png?alt=media&token=0b731003-dac0-4f24-9f91-f28fbb038870",
    url: "https://ramonruizdev.github.io/google-clone/",
    code: "https://github.com/ramonruizdev/google-clone",
  },
  {
    id: 2,
    title: "Ramón Ruiz CV - React App",
    description:
      "Creé mi CV usando React JS donde mando a llamar una API con mis datos desde Heroku en un server-json.",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Fcv.png?alt=media&token=e84e8a65-e9d1-486d-b059-6a48e7c0bd26",
    url: "https://ramonruiz-cv.netlify.app/",
    code: "https://github.com/ramonruizdev/frontend",
  },
  {
    id: 3,
    title: "Platzi Video",
    description:
      "Diseño del home, login, registro y error pages de un sitio web para películas usando HTML y CSS",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Fplatzi-video.png?alt=media&token=1aa88cca-18c3-4320-b3b1-5e046c43ed81",
    url: "https://ramonruizdev.github.io/platzi-video-frontend/platzi-video/",
    code: "https://github.com/ramonruizdev/platzi-video-frontend",
  },
  {
    id: 4,
    title: "Platzi Master X Day",
    description:
      "Reto Frontend del Platzi Master X Day donde junto a un equipo creamos una web simple para visualizar los datos del API en tableros de Trello",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Fxday.png?alt=media&token=c815e477-3060-4fac-a400-8e1f6081a7cd",
    url: "https://platzi-master-team17.herokuapp.com/",
    code: "https://github.com/PlatziMaster/Master-X-Day-Frontend/pull/58",
  },
  {
    id: 5,
    title: "Instagram CSS Grid ",
    description:
      "En el proyecto creé un diseño responsivo similar a la página de usuario en Instagram usando CSS Grid Layout",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Finsta.png?alt=media&token=926e43eb-2a5f-4a44-a9ae-9cd1c7b357d9",
    url: "https://ramonruizdev.github.io/css-grid/instagram",
    code: "https://github.com/ramonruizdev/css-grid/tree/master/instagram",
  },
  {
    id: 6,
    title: "Pinterest CSS Grid",
    description:
      "En el proyecto creé un diseño responsivo similar a la página de Pinterest usando CSS Grid Layout",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Fpint.png?alt=media&token=fc623500-d8c2-4b90-ac5a-21e777464382",
    url: "https://ramonruizdev.github.io/css-grid/pinterest",
    code: "https://github.com/ramonruizdev/css-grid/tree/master/pinterest",
  },
];

var widthScreen = window.innerWidth;
console.log(widthScreen);

function Portafolio() {
  return (
    <div className="portafolio__content" id="portfolio">
      <h2 className="title">Proyectos</h2>
      <section className="portafolio">
        {projects.map((project) => (
          <div>
            {project.id % 2 === 0 ? (
              <div className="portafolio__project">
                {widthScreen >= 768 && project.id % 2 === 0 ? (
                  <div
                    className="porafolio__img--container"
                    style={{ order: 2 }}
                  >
                    <img
                      className="portafolio__img"
                      alt="Proyect Imagen"
                      src={project.imagen}
                    />
                  </div>
                ) : (
                  <div
                    className="porafolio__img--container"
                    style={{ order: "initial" }}
                  >
                    <img
                      className="portafolio__img"
                      alt="Proyect Imagen"
                      src={project.imagen}
                    />
                  </div>
                )}

                <div className="portafolio__text">
                  <h3 className="portafolio__text--title">{project.title}</h3>
                  <p className="portafolio__text--description">
                    {project.description}
                  </p>
                  <a
                    className="portafolio__link"
                    target="__blank"
                    href={project.url}
                  >
                    <button className="portafolio__btn">Ver Proyecto</button>
                  </a>
                  <a
                    className="portafolio__link"
                    target="__blank"
                    href={project.code}
                  >
                    <button className="portafolio__btn">Ver Código</button>
                  </a>
                </div>
              </div>
            ) : (
              <div className="portafolio__project">
                {widthScreen >= 768 && project.id % 2 === 0 ? (
                  <div
                    className="porafolio__img--container"
                    style={{ order: 2 }}
                  >
                    <img
                      className="portafolio__img"
                      alt="Proyect Imagen"
                      src={project.imagen}
                    />
                  </div>
                ) : (
                  <div
                    className="porafolio__img--container"
                    style={{ order: "initial" }}
                  >
                    <img
                      className="portafolio__img"
                      alt="Proyect Imagen"
                      src={project.imagen}
                    />
                  </div>
                )}

                <div className="portafolio__text">
                  <h3 className="portafolio__text--title">{project.title}</h3>
                  <p className="portafolio__text--description">
                    {project.description}
                  </p>
                  <a
                    className="portafolio__link"
                    target="__blank"
                    href={project.url}
                  >
                    <button className="portafolio__btn">Ver Proyecto</button>
                  </a>
                  <a
                    className="portafolio__link"
                    target="__blank"
                    href={project.code}
                  >
                    <button className="portafolio__btn">Ver Código</button>
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Portafolio;
