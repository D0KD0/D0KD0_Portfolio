import React from 'react';
import project1 from "../image/Horiseon.jpeg";
import project2 from "../image/D0KD0.jpeg";
import project3 from "../image/recipe.jpeg";
import project4 from "../image/HelloBud_logo.png";
import project5 from "../image/pre-work.jpeg";

import { Container, Row, Col } from 'react-bootstrap';

export default function Portfolio() {
  return (

    <Container>
      <Row>
        <Col>
          <a href="https://d0kd0.github.io/1st-Challenge-Horiseon/" target='_blank' >
            <img
              src={project1}
              alt="desk at cafe"
              className="resize"
            />
          </a>
        </Col>
        <Col>
        <a href="https://d0kd0.github.io/2nd-Challenge-D0KD0/" target='_blank' >
            <img 
                src={project2}
                alt="ipad on desk"
                className="resize"
              />
            </a>
        </Col>
      </Row>
      <Row>
        <Col>
            <a href="https://d0kd0.github.io/prework-study-guide/" target='_blank' >
              <img 
                src={project3}
                alt="coding sign"
                className="resize"
              />
            </a>
        </Col>
        <Col>
        <a href="https://hellobud-app.herokuapp.com/" target='_black' >
            <img 
            src={project5}
            alt="logo"
            className="resize"
            />
          </a>
        </Col>
        <Col>
        <a href="https://olgagav.github.io/what-am-i-craving-today" target='_black' >
              <img 
                src={project4}
                alt="ipad on desk"
                className="resize"
              />
            </a>
        </Col>
      </Row>
    </Container>

  );
}
