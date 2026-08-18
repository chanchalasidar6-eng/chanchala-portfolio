import React from "react";
import {
  FaAward,
  FaCode,
  FaBrain,
  FaJsSquare,
} from "react-icons/fa";
import {
  FiCalendar,
//   FiBuilding,
  FiCheck,
  FiExternalLink,
} from "react-icons/fi";

import "../styles/Certificates.css";

const certificates = [
  {
    icon: <FaAward />,
    title: "Software Engineering Fellowship",
    organization: "NavGurukul Foundation for Social Welfare",
    year: "2024 — 2025",
    description:
      "Intensive full-stack development training covering frontend, backend, databases, and deployment. Built 5+ real-world projects using React, Node.js, and MongoDB.",
    skills: ["React", "Node.js", "MongoDB", "JavaScript", "Git"],

    // Put your certificate file inside public/certificates/
    certificate: "https://drive.google.com/file/d/17DfwoC-f2Oq0pfye32BVJj_FClUwrZpP/view?usp=sharing",
  },

  {
    icon: <FaCode />,
    title: "Frontend Development Certificate",
    organization: "NavGurukul",
    year: "2024",
    description:
      "Mastered HTML5, CSS3, JavaScript, and React.js through hands-on projects. Built responsive, interactive web applications with modern tooling.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],

    certificate: "/certificates/frontend-development.pdf",
  },

  {
    icon: <FaBrain />,
    title: "Problem Solving & Logic",
    organization: "NavGurukul",
    year: "2024",
    description:
      "Developed strong analytical thinking and algorithmic problem-solving skills through daily coding challenges and collaborative peer learning.",
    skills: ["Algorithms", "Logic", "Debugging", "Teamwork"],

    certificate: "/certificates/problem-solving.pdf",
  },

  {
    icon: <FaJsSquare />,
    title: "JavaScript Fundamentals",
    organization: "NavGurukul",
    year: "2024",
    description:
      "Comprehensive training in JavaScript ES6+, DOM manipulation, async programming, and API integration with practical project-based assessments.",
    skills: ["ES6+", "DOM", "APIs", "Async/Await"],

    certificate: "/certificates/javascript-fundamentals.pdf",
  },
];

const Certificates = () => {
  return (
    <section className="certificates" id="certificates">
      <div className="certificates-container">

        {/* Heading */}
        <div className="certificates-heading">
          <p className="certificates-label">
            Credentials
          </p>

          <h2>Certificates</h2>

          <p className="certificates-subtitle">
            Proof of my training and hands-on skills, recognized through
            structured programs and assessments.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="certificates-grid">

          {certificates.map((certificate, index) => (
            <article
              className="certificate-card"
              key={index}
            >
              {/* Top Line */}
              <div className="certificate-line"></div>

              <div className="certificate-content">

                {/* Header */}
                <div className="certificate-header">

                  <div className="certificate-icon">
                    {certificate.icon}
                  </div>

                  <span className="certificate-date">
                    <FiCalendar />
                    {certificate.year}
                  </span>

                </div>

                {/* Title */}
                <h3>
                  {certificate.title}
                </h3>

                {/* Organization */}
                <p className="certificate-organization">
                  {/* <FiBuilding /> */}
                  {certificate.organization}
                </p>

                {/* Description */}
                <p className="certificate-description">
                  {certificate.description}
                </p>

                {/* Skills */}
                <div className="certificate-skills">

                  {certificate.skills.map((skill) => (
                    <span key={skill}>
                      <FiCheck />
                      {skill}
                    </span>
                  ))}

                </div>

                {/* View Certificate */}
                <a
                  href={certificate.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-button"
                >
                  View Certificate
                  <FiExternalLink />
                </a>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certificates;