import React from "react";
// import Header from './Header.js';
// import Footer from './Footer.js';
//import Dashboard from './Dashboard.js';
import { Bar } from "react-chartjs-2";


class HabitChart extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  render() {
    return (
      <div>
        <Bar
          data={}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Your Habit Progress",
              },
              legend: {
                display: true,
                position: "bottom",
              },
            },
          }}
        />
      </div>
    );
  }
}

export default HabitChart;
