import React, { useState, useEffect } from "react";
import Projects from "./Projects";

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
const projectsPerPage = 3;
let arrayForHoldingProjects = [];

const Portafolio = () => {
  const [projectsToShow, setProjectsToShow] = useState([]);
  const [show, setShow] = useState(true);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedProjects = projects.slice(start, end);
    arrayForHoldingProjects = [...arrayForHoldingProjects, ...slicedProjects];
    setProjectsToShow(arrayForHoldingProjects);
  };

  useEffect(() => {
    loopWithSlice(0, projectsPerPage);
  }, []);

  const showLoadMore = () => {
    setShow(false);
  };

  const handleShowMoreProjects = () => {
    loopWithSlice(next, next + projectsPerPage);
    setNext(next + projectsPerPage);
    showLoadMore();
  };

  return (
    <div>
      <Projects projectsToRender={projectsToShow} />
      <button
        className="projects__load-more"
        onClick={handleShowMoreProjects}
        style={{ display: show ? "block" : "none" }}
      >
        Load more
      </button>
    </div>
  );
};

export default Portafolio;
