import React from "react";
import "./Services.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

function Services() {
  return (
    <Container className="services-container p-0">
      <Row className="p-2">
        <Col md={6} xs={10} className="d-flex justify-content-center">
          <Image src="../../../Assets/Development.png" />
        </Col>
        <Col
          md={6}
          xs={10}
          className="d-flex flex-column justify-content-center"
        >
          <h2 className="title">Web & Mobile App Development</h2>
          <p>
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <Button className="service-btn">Learn More</Button>
        </Col>
      </Row>

      <Row className="p-2">
        <Col
          md={6}
          xs={10}
          className="d-flex flex-column justify-content-center"
        >
          <h2 className="title">Digital Strategy Consulting</h2>
          <p>
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <Button className="service-btn">Learn More</Button>
        </Col>
        <Col md={6} xs={10} className="d-flex justify-content-center">
          <Image src="../../../Assets/Consulting.png" />
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
