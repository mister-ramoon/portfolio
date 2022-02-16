import React from "react";
import "../Styles/Components/Education.scss";

const educations = [
  {
    school: "Platzi",
    degree: "Platzi Master, Frontend Developer, Software Engineer",
    date: "Sep 2018",
    description:
      "Activities and societies: Frontend Developer, Soft Skills, English, Audiovisual Production and more. 💚Platzi is one of the largest online education platforms in Latin America. Where you can learn development, other languages, soft skills, even Web3 technologists and much more. 💻I am part of Platzi Master, the top 0.01% of the best students on the platform who never stop learning.",
  },
  {
    school: "Escuela Politécnica Ing. Jorge Matute Remus",
    degree: "Computer Science",
    date: "Aug 2017 - Jun 2021",
    description:
      "I studied the career of Professional Computer Technologist, where I acquired knowledge of structured programming, object-oriented, networks and basic website development.",
  },
];

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="education">
      <div className="wrapper">
        <Accordion title="Education:">
          {educations.map((education) => (
            <div className="education__item">
              <div className="education__item--title">
                <h3>{education.school}</h3>
                <h4>{education.degree}</h4>
                <p>{education.date}</p>
                <p>{education.description}</p>
              </div>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Education;
