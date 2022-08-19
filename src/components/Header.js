import { withAuth0 } from "@auth0/auth0-react";
import React from "react";
import AuthButton from "./AuthButton.js";
import {Container, Navbar, Nav } from 'react-bootstrap';
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

              <Nav.Item eventkey={1} href="/">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
              </Nav.Item>

              <Nav.Item eventkey={2} href="/">
                <Nav.Link as={Link} to="/Dashboard">Add a Habit</Nav.Link>
              </Nav.Item>

              
              <Nav.Link href="#Progress">Check Progress</Nav.Link>
              <Nav.Link href="#About">About Us</Nav.Link>
            </Nav>
            <Navbar.Brand href="#home"><AuthButton /></Navbar.Brand>
          </Container>
        </Navbar>
        <br />
        <Navbar bg="light" variant="light">
          <Container>
            <Home />
          </Container>
        </Navbar>
      </>
    );
  }
}



export default withAuth0(Header);


/** 
 * 



*/