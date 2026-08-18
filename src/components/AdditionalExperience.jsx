import React from "react";
import {
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

import "../styles/AdditionalExperience.css";

const additionalExperiences = [
  {
    icon: <FaShieldAlt />,
    title: "Class Captain",
    organization: "Holy Cross H.S.S. Pathalgaon",
    date: "2018 — 2020",

    description:
      "Served as a student leader who represented the class, coordinated activities, and supported classmates throughout the academic year.",

    responsibilities: [
      "Represented the class in front of teachers and school administration",
      "Organized and coordinated class activities, events, and celebrations",
      "Maintained discipline and encouraged a supportive, collaborative environment",
      "Acted as the bridge between students and faculty for smooth communication",
    ],
  },

  {
    icon: <FaUsers />,
    title: "Class Representative",
    organization: "Govt Girls H.S.S. SURANGPANI",
    date: "2019 — 2020",

    description:
      "Chosen by peers to voice the class's ideas and concerns, and to drive participation in school activities.",

    responsibilities: [
      "Voiced classmates' ideas, questions, and concerns to teachers",
      "Encouraged participation in school events and group activities",
      "Helped organize study groups and peer support among classmates",
      "Built strong communication and leadership skills in a team setting",
    ],
  },
    {
    icon: <FaShieldAlt />,
    title: "Class Captain",
    organization: "Holy Cross H.S.S. Pathalgaon",
    date: "2018 — 2020",

    description:
      "Served as a student leader who represented the class, coordinated activities, and supported classmates throughout the academic year.",

    responsibilities: [
      "Represented the class in front of teachers and school administration",
      "Organized and coordinated class activities, events, and celebrations",
      "Maintained discipline and encouraged a supportive, collaborative environment",
      "Acted as the bridge between students and faculty for smooth communication",
    ],
  },
    {
    icon: <FaShieldAlt />,
    title: "Class Captain",
    organization: "Holy Cross H.S.S. Pathalgaon",
    date: "2018 — 2020",

    description:
      "Served as a student leader who represented the class, coordinated activities, and supported classmates throughout the academic year.",

    responsibilities: [
      "Represented the class in front of teachers and school administration",
      "Organized and coordinated class activities, events, and celebrations",
      "Maintained discipline and encouraged a supportive, collaborative environment",
      "Acted as the bridge between students and faculty for smooth communication",
    ],
  },
  
];

const AdditionalExperience = () => {
  return (
    <section className="additional-experience" id="leadership">
      <div className="additional-container">

        {/* Heading */}
        <div className="additional-heading">
          <p className="additional-label">
            Beyond the Code
          </p>

          <h2>
            Additional Experience
          </h2>

          <p className="additional-subtitle">
            Leadership and responsibility that shaped my communication
            and teamwork.
          </p>
        </div>

        {/* Cards */}
        <div className="additional-list">

          {additionalExperiences.map((experience, index) => (
            <div
              className="additional-card"
              key={index}
            >

              {/* Left Accent Line */}
              <div className="accent-line"></div>

              {/* Header */}
              <div className="additional-header">

                <div className="additional-title">

                  <div className="additional-icon">
                    {experience.icon}
                  </div>

                  <div>
                    <h3>
                      {experience.title}
                    </h3>

                    <p>
                      {experience.organization}
                    </p>
                  </div>

                </div>

                {/* Date */}
                <span className="additional-date">
                  <FiCalendar />
                  {experience.date}
                </span>

              </div>

              {/* Description */}
              <p className="additional-description">
                {experience.description}
              </p>

              {/* Responsibilities */}
              <ul className="additional-points">

                {experience.responsibilities.map(
                  (item, pointIndex) => (
                    <li key={pointIndex}>
                      <span className="additional-bullet"></span>
                      {item}
                    </li>
                  )
                )}

              </ul>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AdditionalExperience;