import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <Container>
      <Row>
        
      </Row>
      <Row>
        <Col>
          <img
            src="https://media.licdn.com/dms/image/C5603AQGbNkzzpz3KEQ/profile-displayphoto-shrink_400_400/0/1654873453797?e=1683158400&v=beta&t=qg4RF5oP9fmT-oAUxLkTTUHbSRlxmbQPfQP-wc21RdU"
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
