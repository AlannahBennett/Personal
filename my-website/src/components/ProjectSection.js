import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "WEB SCRAPER",
    description:
      "A web application that combines a React front end with a Python Flask back end for web scraping functionality.",
    link: "https://github.com/AlannahBennett/WebScraperWebsite",
    backgroundColor: "#FAEDCB", //YELLOW
  },
  {
    title: "FULL STACK APP",
    description:
      "Developed and hosted a responsive website using Bootstrap, SCSS, and Netlify. Implemented design principles to ensure optimal viewing experience across various devices and screen sizes.",
    link: "https://cartoninteriorswdf.netlify.app/",
    backgroundColor: "#C9E4DE", //GREEN
  },
  {
    title: "EDUCATIONAL PLATFORM",
    description:
      "Developed an educational platform aligned with Sustainable Development Goal 5 - Gender Equality. The platform aims to bridge the gender gap in STEM fields by providing women at any career stage with access to resources, mentorship, and learning opportunities.",
    link: "https://github.com/AlannahBennett/SDGProject",
    backgroundColor: "#C5DEF2", //BLUE
  },
];

function ProjectSection() {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "Reenie Beanie, cursive",
            fontSize: "50px",
          }}
        >
          My Projects
        </h2>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col
              md={4}
              key={index}
              className="mb-4 d-flex justify-content-center"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                link={project.link}
                backgroundColor={project.backgroundColor}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProjectSection;
