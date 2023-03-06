import React from 'react';
import project1 from "../image/Horiseon.jpeg";
import project2 from "../image/D0KD0.jpeg";
import project3 from "../image/recipe.jpeg";
import project4 from "../image/HelloBud_logo.png";
import project5 from "../image/pre-work.jpeg";

import { Container, Row, Col, Figure } from 'react-bootstrap';

export default function Portfolio() {
  return (

    <Container>
      <Row>
        <Col>
        <Figure>
          <a href="https://d0kd0.github.io/1st-Challenge-Horiseon/" target='_blank' >
            <Figure.Image
              width={170}
              height={170}
              src={project1}
              alt="desk at cafe"
              className="resize"
            />
          </a>
        </Figure>
        </Col>
        <Col>
        <Figure>
        <a href="https://d0kd0.github.io/2nd-Challenge-D0KD0/" target='_blank' >
            <Figure.Image
              width={170}
              height={170}
              src={project2}
              alt="desk at cafe"
              className="resize"
            />
          </a>
        </Figure>
        </Col>
      </Row>
      
      <Row>
        <Col>
        <Figure>
        <a href="https://d0kd0.github.io/prework-study-guide/" target='_blank' >
        <Figure.Image
          width={170}
          height={170}
          src={project3}
          alt="desk at cafe"
          className="resize"
        />
        </a>
        </Figure>
        </Col>

        <Col>
        <Figure>
          <a href="https://hellobud-app.herokuapp.com/" target='_black' >
          <Figure.Image
            width={170}
            height={170}
            src={project4}
            alt="desk at cafe"
            className="resize"
          />
          </a>
        </Figure>
        </Col>
        <Col>
        <Figure>
          <a href="https://olgagav.github.io/what-am-i-craving-today" target='_black' >
          <Figure.Image
            width={170}
            height={170}
            src={project5}
            alt="desk at cafe"
            className="resize"
          />
          </a>
        </Figure>
        </Col>
      </Row>
    </Container>

  );
}
