import React from 'react';
import Header from './Header.js';
// import About from './About.js';
// import Footer from './Footer.js';
// import Progress from './Progress.js';
// import Dashboard from './Dashboard.js';
import Home from './Home.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {<Home />}
        {/* <Dashboard/>
        <Progress/>
        <About/>
        <Footer/>*/}
      </div>
    );
  }
}

export default App;