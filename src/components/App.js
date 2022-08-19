import React from 'react';
import Header from './Header.js';
import About from './About.js';
//import Footer from './Footer.js';
import Progress from './Progress.js';
import Dashboard from './Dashboard.js';
import Home from './Home.js';
import { Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Progress" element={<Progress />} />
          <Route path="/About" element={<About />} />


        </Routes>
        {/* {<Home />} */}
        {/* <Dashboard/>
        <Progress/>
        <About/>
        <Footer/>*/}


      </div>
    );
  }
}

export default App;