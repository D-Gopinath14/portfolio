import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import atm from "../../Assets/Projects/atm.png";
import Movie from "../../Assets/Projects/MovieTicket.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atm}
              isBlog={false}
              title="ATM Logic Simulation"
              description="A Java console-based project that replicates basic banking operations such as deposit, withdrawal, and balance inquiry. It includes user authentication with account number and PIN for secure access. Designed to strengthen understanding of core Java concepts like loops, conditionals, and menu-driven programming."
              ghLink="https://github.com/D-Gopinath14/ATM_Banking_App"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              isBlog={false}
              title="Movie Ticket Booking"
              description="A console-based Java application that simulates a movie ticket booking system with seat selection and OTP-based user authentication.
Designed to handle user input, booking flow, and real-time seat availability using Core Java concepts.
Strengthened problem-solving and programming skills through a real-world use case simulation."
              ghLink="https://github.com/D-Gopinath14/MovieTicketBooking"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
