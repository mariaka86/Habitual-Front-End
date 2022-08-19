import { withAuth0 } from "@auth0/auth0-react";
import React from "react";
import AuthButton from "./AuthButton.js";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar>
          <Container>
            <Navbar.Brand href="#Habitual">Habitual</Navbar.Brand>
          </Container>
        </Navbar>
        <br />
        <Navbar>
          <Container>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Add a Habit</Nav.Link>
              <Nav.Link as={Link} to="/progress">Check Progress</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            </Nav>
            <Navbar.Brand href="#home"><AuthButton /></Navbar.Brand>
          </Container>
        </Navbar>
       
      </>
    );
  }
}



export default withAuth0(Header);