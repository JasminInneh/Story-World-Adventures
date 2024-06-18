import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../../styles/header.css'; // Import your custom CSS for header styles

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand href="#home" className="brand">
        StoryWorld Adventures
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link href="#books" className="nav-link">
            Books
          </Nav.Link>
          <Nav.Link href="#about" className="nav-link">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

