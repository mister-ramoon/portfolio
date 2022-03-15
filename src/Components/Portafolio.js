import React, { useState, useEffect } from "react";
import Projects from "./Projects";

const projects = [
  {
    id: 1,
    title: "Google Clone",
    description:
      "Google Clone is a responsive copy of the Google search, made only with HTML and CSS.",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Fgoogle-clone.png?alt=media&token=0b731003-dac0-4f24-9f91-f28fbb038870",
    url: "https://ramonruizdev.github.io/google-clone/",
    code: "https://github.com/ramonruizdev/google-clone",
  },
  {
    id: 2,
    title: "CV - React App",
    description:
      "I develop my CV on a website, where I call an API to display my data. I used: ReactJS, Stylus, JavaScript.",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Fcv.png?alt=media&token=e84e8a65-e9d1-486d-b059-6a48e7c0bd26",
    url: "https://ramonruiz-cv.netlify.app/",
    code: "https://github.com/ramonruizdev/frontend",
  },
  {
    id: 3,
    title: "Platzi Video",
    description:
      "Design of the home, login, registration and error pages of a website for movies with only HTML and CSS.",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Fplatzi-video.png?alt=media&token=1aa88cca-18c3-4320-b3b1-5e046c43ed81",
    url: "https://ramonruizdev.github.io/platzi-video-frontend/platzi-video/",
    code: "https://github.com/ramonruizdev/platzi-video-frontend",
  },
  {
    id: 4,
    title: "Platzi Master X Day - Trello API",
    description:
      "Frontend Platzi Master X Day Challenge. Together with a team, we built a simple website to display API data on Trello boards. I used: Javascript, SASS, HTML.",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Fxday.png?alt=media&token=c815e477-3060-4fac-a400-8e1f6081a7cd",
    url: "https://platzi-master-team17.herokuapp.com/",
    code: "https://github.com/PlatziMaster/Master-X-Day-Frontend/pull/58",
  },
  {
    id: 5,
    title: "Instagram CSS Grid",
    description:
      "In this project I created a responsive layout similar to the Instagram user page using CSS Grid Layout. I used: CSS, HTML.",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Finsta.png?alt=media&token=926e43eb-2a5f-4a44-a9ae-9cd1c7b357d9",
    url: "https://ramonruizdev.github.io/css-grid/instagram",
    code: "https://github.com/ramonruizdev/css-grid/tree/master/instagram",
  },
  {
    id: 6,
    title: "Pinterest CSS Grid",
    description:
      "In this project I created a responsive layout similar to the Pinterest user page using CSS Grid Layout. I used: CSS , HTML.",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Fpint.png?alt=media&token=fc623500-d8c2-4b90-ac5a-21e777464382",
    url: "https://ramonruizdev.github.io/css-grid/pinterest",
    code: "https://github.com/ramonruizdev/css-grid/tree/master/pinterest",
  },
  {
    id: 7,
    title: "Future Value Calculator",
    description:
      "I develop a website to calculate the future value. I Used: HTML, CSS, JavaScript.",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Ffuture-value.png?alt=media&token=337f18ca-0a34-4099-afef-e25af4650f3f",
    url: "https://github.com/ramonruizdev/Ejercicio_ValorFuturo/",
    code: "https://github.com/ramonruizdev/css-grid/tree/master/instagram",
  },
  {
    id: 8,
    title: "Invoice Generator",
    description:
      "I develop a generador de facturas con cupón de descuento. I Used: HTML, CSS, JavaScript.",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/ramonruizdev.appspot.com/o/img%2Fgenerador-facturas.png?alt=media&token=9113fa0f-07bf-4ad5-8f26-46f1151647d5",
    url: "https://ramonruizdev.github.io/Platzi-Master_generador-de-facturas/",
    code: "https://github.com/ramonruizdev/Platzi-Master_generador-de-facturas",
  },
];
const projectsPerPage = 4;
let arrayForHoldingProjects = [];

const Portafolio = () => {
  const [projectsToShow, setProjectsToShow] = useState([]);
  const [show, setShow] = useState(true);
  const [next, setNext] = useState(4);

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
