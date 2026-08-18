import React from "react";
import {
  FiExternalLink,
  FiGithub,
  FiArrowRight,
} from "react-icons/fi";

import "../styles/Projects.css";

const projects = [
  {
    title: "Weather Dashboard",
    category: "Frontend",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20weather%20dashboard%20web%20application%20UI%20mockup%2C%20light%20interface%20with%20temperature%20cards%2C%20forecast%20charts%20and%20weather%20icons%2C%20teal%20accent%20highlights%2C%20clean%20minimal%20professional%20design%2C%20high%20detail%2C%20no%20text&width=900&height=600&seq=proj-weather-01&orientation=landscape&nocache=true",
    description:
      "A real-time weather application that fetches data from the OpenWeather API. Features dynamic backgrounds based on weather conditions, a 5-day forecast, and a clean, responsive interface built with React and Tailwind CSS.",
    skills: ["React", "OpenWeather API", "Tailwind CSS"],
    live:
      "https://weather-app-tau-one-86.vercel.app/",
    github:
      "https://github.com/Chanchala7654321/Weather_App",
  },

  {
    title: "To-Do List Application",
    category: "Frontend",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20todo%20list%20application%20UI%20mockup%2C%20light%20interface%20with%20task%20cards%2C%20checkboxes%2C%20and%20category%20tags%2C%20teal%20accent%20highlights%2C%20clean%20minimal%20professional%20design%2C%20high%20detail%2C%20no%20text&width=900&height=600&seq=proj-todo-01&orientation=landscape&nocache=true",
    description:
      "A fully interactive to-do list built with vanilla JavaScript. Users can add, delete, and mark tasks as complete without any page reloads, using pure DOM manipulation for a smooth experience.",
    skills: ["JavaScript", "HTML5", "CSS3"],
    live:
      "https://chanchala7654321.github.io/Todolist/",
    github:
      "https://github.com/Chanchala7654321/Todolist",
  },

  {
    title: "Personal Portfolio Website",
    category: "Frontend",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20personal%20portfolio%20website%20UI%20mockup%2C%20light%20interface%20with%20hero%20section%2C%20project%20cards%20and%20skills%20grid%2C%20teal%20accent%20highlights%2C%20clean%20minimal%20professional%20design%2C%20high%20detail%2C%20no%20text&width=900&height=600&seq=proj-portfolio-01&orientation=landscape&nocache=true",
    description:
      "A fully responsive personal portfolio built using HTML5 and CSS3. Demonstrates mastery of Flexbox and CSS Grid for consistent layouts across different screen sizes.",
    skills: ["HTML5", "CSS3"],
    live:
      "https://chanchala7654321.github.io/Bio/",
    github:
      "https://github.com/Chanchala7654321/Bio",
  },

  {
    title: "Trip Calculator",
    category: "Frontend",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20trip%20calculator%20web%20application%20UI%20mockup%2C%20light%20interface%20with%20input%20fields%2C%20calculation%20results%20and%20quantity%20counters%2C%20teal%20accent%20highlights%2C%20clean%20minimal%20professional%20design%2C%20high%20detail%2C%20no%20text&width=900&height=600&seq=proj-trip-01&orientation=landscape&nocache=true",
    description:
      "An interactive trip calculator with a dynamic quantity counter. Users can adjust quantities and see real-time trip cost calculations in a responsive interface.",
    skills: ["JavaScript", "HTML5", "CSS3"],
    live:
      "https://chanchala7654321.github.io/Trip-Calculator/",
    github:
      "https://github.com/Chanchala7654321/Trip-Calculator",
  },

  {
    title: "Number Guessing Game",
    category: "Games",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20number%20guessing%20game%20web%20application%20UI%20mockup%2C%20light%20interface%20with%20score%20display%2C%20input%20field%20and%20dynamic%20feedback%20messages%2C%20playful%20but%20professional%20design%2C%20teal%20accent%20highlights%2C%20high%20detail%2C%20no%20text&width=900&height=600&seq=proj-game-01&orientation=landscape&nocache=true",
    description:
      "An interactive number guessing game with score tracking, high-score persistence, and dynamic UI feedback. Built with vanilla JavaScript to demonstrate logic, state management, and DOM interaction skills.",
    skills: ["JavaScript", "CSS3", "HTML5"],
    live:
      "https://guess-game-theta-six.vercel.app/",
    github:
      "https://github.com/Chanchala7654321/Guess-Game",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        {/* Heading */}
        <div className="projects-heading">
          <h2>Projects</h2>

          <p>
            Things I've built along the way
          </p>
        </div>

        {/* Projects */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={index}
            >
              {/* Image */}
              <div className="project-image-wrapper">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="project-content">

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="project-skills">
                  {project.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="project-buttons">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-button"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button"
                  >
                    <FiGithub />
                    GitHub
                  </a>

                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="view-all">
          <a
            href="https://github.com/Chanchala7654321"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects
            <FiArrowRight />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;