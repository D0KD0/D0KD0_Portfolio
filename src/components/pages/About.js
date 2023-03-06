import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import avatar from "../image/avatar.png";

export default function About() {
  return (
    <Container>
      <Row>
        
      </Row>
      <Row>
        <Col>
          <img
            src={avatar}
            alt="Profile iamge of Minjoo Park"
            className="img-thumbnail"
          />
        </Col>
        <Col>
            <p>
            Hello there, I am full-time Material Planner at Automotive company. 
            </p>
            <p>
            I have been working at supply chain industry for 7 years and currently taking bootcamp courses at UC Berkley (completion in March 2023).
            </p>
            <p>
            Open and looking for work industry change and become Web Developer.
            </p>
        </Col>
      </Row>
    </Container>
  );
};
