import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col lg={6} className="mb-4 mb-lg-0">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </Col>
          <Col lg={6}>
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-dark">Link 1</a></li>
              <li><a href="#!" className="text-dark">Link 2</a></li>
              <li><a href="#!" className="text-dark">Link 3</a></li>
              <li><a href="#!" className="text-dark">Link 4</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;