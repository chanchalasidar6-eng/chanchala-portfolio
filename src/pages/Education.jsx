import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import "../styles/Education.css";

const educationData = [
  {
    title: "12th Grade",
    year: "2019 — 2020",
    school: "Govt Girls H.S.S. SURANGPANI",
    description:
      "Completed higher secondary schooling with a strong foundation in core subjects and analytical thinking.",
    subjects: ["Mathematics", "Science"],
  },
  {
    title: "10th Grade",
    year: "2017 — 2018",
    school: "Holy Cross H.S.S. Pathalgaon",
    description:
      "Completed secondary schooling with a focus on overall academic development and discipline.",
    subjects: ["Academics"],
  },
];

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education-container">

        {/* Heading */}
        <div className="education-heading">
          <h2>Education</h2>
          <p>My academic background</p>
        </div>

        {/* Education Cards */}
        <div className="education-list">
          {educationData.map((education, index) => (
            <div className="education-card" key={index}>

              {/* Icon */}
              <div className="education-icon">
                <FaGraduationCap />
              </div>

              {/* Content */}
              <div className="education-content">

                <div className="education-top">
                  <h3>{education.title}</h3>

                  <span className="education-date">
                    {education.year}
                  </span>
                </div>

                <p className="education-school">
                  {education.school}
                </p>

                <p className="education-description">
                  {education.description}
                </p>

                {/* Subjects */}
                <div className="education-subjects">
                  {education.subjects.map((subject) => (
                    <span key={subject}>
                      {subject}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;