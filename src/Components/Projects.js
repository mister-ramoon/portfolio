import React from "react";
import "../Styles/Components/Portafolio.scss";

var widthScreen = window.innerWidth;
console.log(widthScreen);

const Projects = ({ projectsToRender }) => {
  return (
    <div className="portafolio__content" id="portfolio">
      <h2 className="portafolio_title">Projects:</h2>
      <section className="portafolio">
        {projectsToRender.map((project) => (
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
                  <div className="portafolio__links">
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
                  <div className="portafolio__links">
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
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
