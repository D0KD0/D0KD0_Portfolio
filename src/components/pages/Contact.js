import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function Contact() {
  return (

    <Container>
      <Row>
        <Col>
          You can find me from here:
        </Col>
        <Col>
        <a href="https://www.linkedin.com/in/parkminjoo/" target="_blank"> <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" class="contact"/></a> 
        
        <a href="https://github.com/D0KD0/" target="_blank"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" class="contact"/></a>

        </Col>
      </Row>
    </Container>

  );
  }