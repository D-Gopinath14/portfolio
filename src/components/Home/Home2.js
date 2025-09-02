import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with technology and problem-solving, and I’ve been learning step by step,
              building my foundation strong. 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Core Java </b>
              </i>
              and comfortable in applying my skills to real-world problem solving through projects.
              <br />
              <br />My field of interest lies in &nbsp;
              <i>
                <b className="purple">Software Development , Data Analytics </b>
                and also in building impactful
                <b className="purple"> Console-based and Real-world Applications. </b>
              </i>
              <br />
              <br />Whenever possible, I also apply my passion for learning by working on projects such as an
              <i><b className="purple"> ATM Logic Simulator</b></i> and a
              <i>
                <b className="purple"> Movie Ticket Booking System</b>
              </i>
              , while exploring platforms like
              <i>
                <b className="purple"> LeetCode and GeeksforGeeks</b>
              </i>
              &nbsp; to sharpen my problem-solving ability.
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/D-Gopinath14"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/gopinathdharumalingam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
