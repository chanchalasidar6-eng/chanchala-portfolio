import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import "../styles/Experience.css";
import AdditionalExperience from "../components/AdditionalExperience";

const experiences = [
  {
    icon: <FaGraduationCap />,
    organization: "NavGurukul Foundation for Social Welfare",
    role: "Software Engineering Fellow",
    date: "July 2024 — Present",

    responsibilities: [
      "Built 5+ full-stack and frontend projects using React, JavaScript, Node.js, and MongoDB",
      "Developed strong problem-solving skills through daily coding challenges and peer collaboration",
      "Gained hands-on experience with REST APIs, authentication, and database design",
      "Collaborated with fellow developers in an immersive, peer-learning environment",
    ],

    skills: [
      "React",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Git",
    ],
  },

  {
    icon: <FaBriefcase />,
    organization: "Vadodara Jilla Sarvodaya Mandal",
    role: "Computer & Office Assistant",
    date: "September 2026 — Present",

    responsibilities: [
      "Assisted with computer and office-related tasks",
      "Worked with software testing and provided feedback on software functionality",
      "Handled data entry and maintained office-related information",
      "Supported day-to-day administrative and computer-related activities",
    ],

    skills: [
      "Software Testing",
      "Data Entry",
      "Computer Operations",
      "Office Management",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        {/* Heading */}
        <div className="experience-heading">
          <h2>Experience</h2>
          <p>Where I've trained and contributed</p>
        </div>

        {/* Experience Cards */}
        <div className="experience-list">

          {experiences.map((experience, index) => (
            <div className="experience-card" key={index}>

              {/* Header */}
              <div className="experience-header">

                <div className="experience-title">

                  <div className="experience-icon">
                    {experience.icon}
                  </div>

                  <div>
                    <h3>{experience.organization}</h3>
                  </div>

                </div>

                <span className="experience-date">
                  {experience.date}
                </span>

              </div>

              {/* Role */}
              <p className="experience-role">
                {experience.role}
              </p>

              {/* Responsibilities */}
              <ul className="experience-points">

                {experience.responsibilities.map((item, pointIndex) => (
                  <li key={pointIndex}>
                    <span className="bullet"></span>
                    {item}
                  </li>
                ))}

              </ul>

              {/* Skills */}
              <div className="experience-skills">

                {experience.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    <FiCode />
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>
      </div>

      <AdditionalExperience />
    </section>
  );
};

export default Experience;