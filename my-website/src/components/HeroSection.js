import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../index.css'; // optional CSS for extra styling

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center text-center" id="home">
      <Container>
        <h1 className="display-4 fw-bold">Hi, I'm Alannah!</h1>
        <h2 className="lead mb-4"> Computer Science Student | Software Engineer</h2>
        <div className="d-flex justify-content-center gap-3">
          <Button variant="primary" href="#projects">View Projects</Button>
          <Button variant="outline-light" href="/resume.pdf" target="_blank">Download Resume</Button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
