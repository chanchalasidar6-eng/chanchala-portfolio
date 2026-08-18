import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaClock,
  FaUserTie,
  FaPuzzlePiece,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVercel,
} from "react-icons/si";

import { FiCode, FiDatabase, FiMonitor } from "react-icons/fi";

import "../styles/Skills.css";

const technicalSkills = [
  {
    title: "Programming Languages",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
  },

  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
    ],
  },

  {
    title: "Tools & Databases",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <FiCode /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
];

const nonTechnicalSkills = [
  {
    name: "Communication",
    icon: <FaComments />,
  },
  {
    name: "Teamwork",
    icon: <FaUsers />,
  },
  {
    name: "Problem Solving",
    icon: <FaPuzzlePiece />,
  },
  {
    name: "Leadership",
    icon: <FaUserTie />,
  },
  {
    name: "Time Management",
    icon: <FaClock />,
  },
  {
    name: "Adaptability",
    icon: <FaLightbulb />,
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        {/* Heading */}
        <div className="skills-heading">
          <h2>Skills</h2>

          <p>
            Technologies, tools, and personal skills I bring to my work
          </p>
        </div>

        {/* Main Skills */}
        <div className="skills-grid">

          {/* Technical Skills */}
          <div className="skills-section">

            <div className="skills-section-title">
              <FiMonitor />
              <h3>Technical Skills</h3>
            </div>

            {technicalSkills.map((category) => (
              <div className="skill-category" key={category.title}>

                <h4>{category.title}</h4>

                <div className="skill-items">

                  {category.skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>

                      <span className="skill-icon">
                        {skill.icon}
                      </span>

                      <span className="skill-name">
                        {skill.name}
                      </span>

                    </div>
                  ))}

                </div>
              </div>
            ))}

          </div>

          {/* Non-Technical Skills */}
          <div className="skills-section">

            <div className="skills-section-title">
              <FaUsers />
              <h3>Non-Technical Skills</h3>
            </div>

            <div className="non-tech-grid">

              {nonTechnicalSkills.map((skill) => (
                <div className="non-tech-item" key={skill.name}>

                  <span className="non-tech-icon">
                    {skill.icon}
                  </span>

                  <span>
                    {skill.name}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;