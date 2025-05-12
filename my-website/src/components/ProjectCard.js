import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowRight } from 'react-icons/fa';
import '../index.css'; // Custom CSS file for styles

function ProjectCard({ title, description, imgSrc, link, backgroundColor }) {
  const textStyle = { color: backgroundColor }; // Dynamic text color

  return (
    <Card className="project-card" style={{ backgroundColor }}>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div className="title-container">
          <Card.Title style={textStyle}>{title}</Card.Title>
        </div>
        <Card.Text className="flex-grow-1" >
          {description}
        </Card.Text>
        <Button variant="primary" href={link} target="_blank">
          View Project <FaArrowRight />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;


