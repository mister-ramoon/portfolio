import React from "react";
import "../Styles/Components/Experience.scss";

const experiences = [
  {
    title: "Frontend Jr",
    company: "Potentor",
    date: "Jan 2022 - Present",
    ubication: "Remote",
    activities: [
      "Frontend development of RH Software.",
      "Use of agile methodologies",
    ],
    technologies: ["CSS", "Java", "JavaScript", "Genexus"],
  },
  {
    title: "Webmaster Freelance",
    company: "Solved Puzzle Agency",
    date: "Oct 2021 - Jan 2022",
    ubication: "Remote",
    activities: [
      "Frontend development of internal company projects",
      "Use of agile methodologies",
    ],
    technologies: ["Shopify", "WordPress", "JavaScript", "PHP", "CSS"],
  },
  {
    title: "Frontend Developer",
    company: "AXO System",
    date: "May 2021 - Sep 2021",
    ubication: "Zapopan, Jalisco, Mexico",
    activities: [
      "Frontend development of internal company projects",
      "Use of agile methodologies",
    ],
    technologies: [
      "React JS",
      "WordPress",
      "JavaScript",
      "Material UI",
      "NodeJS",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Trato Hecho",
    date: "Jun 2020 - Mar 2021",
    ubication: "Zapopan, Jalisco, Mexico",
    activities: [
      "Frontend development of the deal-hecho.com platform",
      "Basic management of relational databases",
      "Use of Scrum methodology",
    ],
    technologies: [
      "React JS",
      "WordPress",
      "Git y GitHub",
      "Material UI",
      "PostgreSQL",
    ],
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

const Experience = () => {
  return (
    <div className="experience">
      <div className="wrapper">
        <Accordion title="Experience:">
          {experiences.map((experience) => (
            <div className="experience__item">
              <div className="experience__item--title">
                <h3>{experience.title}</h3>
                <h4>{experience.company}</h4>
                <p>{experience.date}</p>
                <p>{experience.ubication}</p>
              </div>
              <div className="experience__item--activities">
                <h5>Activities</h5>
                <ul>
                  {experience.activities.map((activity) => (
                    <li>{activity}</li>
                  ))}
                </ul>
              </div>
              <div className="experience__item--technologies">
                <h5>Technology</h5>
                <ul>
                  {experience.technologies.map((technology) => (
                    <li>{technology}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Experience;
