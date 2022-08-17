import { withAuth0 } from "@auth0/auth0-react";
import React from "react";
import AuthButton from "./AuthButton.js";
import About from "./About.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import Dashboard from "./Dashboard.js";
// import Progress from "./Progress.js";

class Header extends React.Component {
  render() {
    return (
      <>
      <h1>Habitual</h1>
      <AuthButton/>
      <Router>
        { <Link to="/">Home</Link> }
        <Link to="/Dashboard">Add a Habit</Link>
        {/* <Link to="/Progress">Check Progress</Link> */}
        <Link to="/About">About Us</Link>
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/Dashboard" element={<Dashboard />} />
          {/* <Route exact path="/Progress" element={<Progress />} /> */}
          <Route exact path="/About" element={<About />} />
        </Routes>
      </Router>
      </>
    );
  }
}



export default withAuth0(Header);
