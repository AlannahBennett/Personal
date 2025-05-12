import React from "react";
import { Container } from "react-bootstrap";
import "../index.css";

const experiences = [
  {
    role: "Software Development Engineer Intern",
    company: "Amazon",
    date: "June 2025 - Present",
    description: "Working on the AWS Cloud Metrics team.",
    logo: "/amazon.png",
    skills: ["React", "AWS", "Node.js", "TypeScript"]
  },

  {
    role: "Coding Tutor + Content Writer",
    company: "Olus Education",
    date: "June 2023 - Present",
    description: "Built and maintained responsive websites for local clients.",
    logo: "/olus.png",
    skills: ["React", "AWS", "Node.js", "TypeScript"]
  },
  {
    role: "Mentee",
    company: "Amazon",
    date: "June 2024 - December 2024",
    description: "Assisted in teaching data structures and graded assignments.",
    logo: "/amazon.png",
    skills: ["React", "AWS", "Node.js", "TypeScript"]
  },
  {
    role: "Software Engineer Intern",
    company: "Dell Technologies",
    date: "June 2024 - September 2024",
    description: "Assisted in teaching data structures and graded assignments.",
    logo: "/dell.png",
    skills: ["React", "AWS", "Node.js", "TypeScript"]
  },
  {
    role: "Mentee",
    company: "Dell Technologies",
    date: "October 2023 - April 2024",
    description: "Assisted in teaching data structures and graded assignments.",
    logo: "/dell.png",
    skills: ["React", "AWS", "Node.js", "TypeScript"]
  },
];

function SkillsSection() {
  return (
    <section className="skills-experience-section py-5" id="skills">
      <Container>
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "Reenie Beanie, cursive",
            fontSize: "50px",
          }}
        >
          Skills & Experience
        </h2>

        {/* Roles Column */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item d-flex">
              <div className="timeline-content text-center">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="timeline-logo mb-2"
                />
                <h5 className="mb-1">
                  {exp.role} @ {exp.company}
                </h5>
                <p className="text-muted mb-1">{exp.date}</p>
                <p className="mb-0">{exp.description}</p>
              </div>
            </div>
          ))}
          <div className="timeline-end-circle"></div>
        </div>
        
      </Container>
    </section>
  );
}

export default SkillsSection;
