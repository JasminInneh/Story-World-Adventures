import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const books = [
  { title: 'Book 1', description: 'This is a description of book 1' },
  { title: 'Book 2', description: 'This is a description of book 2' },
  // Add more books as needed
];

const MainContent = () => {
  return (
    <Container>
      <Row>
        {books.map((book, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MainContent;
