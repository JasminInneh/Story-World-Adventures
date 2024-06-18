import React from 'react';
import { Container } from 'react-bootstrap';
import banner from '../../styles/banner.css'

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <div className="banner-content">
          <h1>Welcome to Story World Adventures</h1>
          <p>Explore, Learn and Imagine in Every Chapter</p>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
