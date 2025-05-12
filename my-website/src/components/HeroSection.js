import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "../index.css";

const HeroSection = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="hero-section d-flex align-items-center" id="home">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          particles: {
            color: { value: "#ffffff" },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 150,
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 2 },
            number: { value: 50 },
            size: { value: 3 },
          },
        }}
        className="particles"
      />

      <Container className="z-1 position-relative">
        <Row className="align-items-center text-center text-md-start">
      
          <Col md={6} className="mb-4 mb-md-0 d-flex justify-content-center">
            <img
              src="/elearning.png"
              alt="Alannah portrait"
              className="img-fluid hero-image"
            />
          </Col>

          <Col md={6}>
            <motion.h1
              className="display-4 fw-bold"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              Hiii, I'm Alannah!
            </motion.h1>

            <motion.h2
              className="lead mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Computer Science Student | Coding Tutor | Software Engineering
            </motion.h2>

            <motion.div
              className="d-flex justify-content-center justify-content-md-start gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
    
              <Button
                variant="outline-light"
                href="/resume.pdf"
                target="_blank"
              >
                Download Resume
              </Button>
            </motion.div>
          </Col>
          
        </Row>
      </Container>

    </section>
  );
};

export default HeroSection;
