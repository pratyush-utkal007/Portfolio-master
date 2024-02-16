import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Pratyush Ku Prusty </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />I am currently employed as a software developer at
            <span className="purple"> Digital Deta.</span>
            <br />
            I'm a Full-Stack web developer with a passion for creating
            beautiful, functional, and user-centered digital experiences. With 1
            year+ of experience in the field. I am always looking for new and
            innovative ways to bring my clients' visions to life.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Think Twice Code Once "{" "}
          </p>
          <footer className="blockquote-footer">Pratyush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
