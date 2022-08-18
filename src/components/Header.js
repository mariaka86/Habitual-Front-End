import { withAuth0 } from "@auth0/auth0-react";
import React from "react";
import AuthButton from "./AuthButton.js";
import About from "./About.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import Dashboard from "./Dashboard.js";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import Button from 'react-bootstrap/Button';
import Progress from "./Progress.js";


class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar style={{margins: 'auto', min: '200vh'}}>
          <Container>
            <Nav.Item style={{align: 'right'}}>
              <AuthButton />
            </Nav.Item>
          </Container>
          <Container style={{fontSize: '30px'}}>
            <Navbar.Brand href="/home">Habitual</Navbar.Brand>
          </Container>
          <Container>
          <Router>
            {<Link to="/">Home</Link>}
            <Link to="/Dashboard">Add a Habit</Link>
            <Link to="/Progress">Check Progress</Link>
            <Link to="/About">About Us</Link>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Dashboard" element={<Dashboard />} />
              <Route exact path="/Progress" element={<Progress />} />
              <Route exact path="/About" element={<About />} />
            </Routes>
          </Router>
          </Container>
        </Navbar>
      </>
    );
  }
}



export default withAuth0(Header);
