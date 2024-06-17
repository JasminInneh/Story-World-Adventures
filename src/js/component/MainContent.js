import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import mainContent from '../../styles/mainContent.css'

const books = [
  { title: 'Book 1', description: 'This is a description of book 1' },
  { title: 'Book 2', description: 'This is a description of book 2' },
  { title: 'Book 3', description: 'This is a description of book 3' },
  // Add more books as needed
];

const MainContent = () => {
  return (
    <Container className="main-content">
      {/* Central Content */}
      <div className="central-content">
        <img src="https://i.ibb.co/K2dJmnb/main-Content.jpg" alt="animated character flying with book wings" className="central-image" />
        <h2>Explore, Learn, and Imagine in Every Chapter</h2>
      </div>

      {/* Book Listings */}
      <Row>
        {books.map((book, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.description}</Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MainContent;