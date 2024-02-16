import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Slaywithus"
              description="
              It is based On Virtual Fashionistas, who have pioneered the concept of Virtual Styling in India, driven by their passion for mixing and matching diverse outfits and providing solutions to the perennial question of What to wear and contributing to the creation of a fashionable nation.
              "
              ghLink="https://github.com/pratyush-utkal007/Slaywithus_"
              demoLink="https://slaywithus.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Waasho"
              description="Waasho, a premier Waterless Carwash Company, had a vision: redefine automotive care with a sustainable touch. We stepped up by crafting their website in React, creating a cutting-edge booking system that's a lead magnet, and shouting out loud, Say Goodbye to Wasting Water! Our waterless tech not only preserves gallons but leaves vehicles gleaming without harming the planet."
              ghLink="https://github.com/pratyush-utkal007/Wassho_"
              demoLink="https://www.waasho.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Estern Ghat"
              description="Eisternghats is an innovative e-commerce platform specializing in organic products, offering a diverse range from spacious millets to wholesome foods. Our mission is to provide customers with premium-quality organic goods sourced directly from sustainable producers. With a commitment to health and sustainability, we prioritize products such as organic millets and specialty foods, ensuring they meet stringent quality standards. "
              ghLink="https://github.com/pratyush-utkal007/"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
