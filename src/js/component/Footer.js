import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col lg={6} className="mb-4 mb-lg-0">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>
              Miami, Florida <br />
              Phone: +1 234 567 890
              <br />
              Email: jasmininneh@gmail.com
            </p>
          </Col>
          <Col lg={6}>
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark">
                  Follow us on Instagram
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
