import React, { Component } from 'react';
import axios from 'axios';
const SERVER = process.env.REACT_APP_SERVER_URL;

class Dashboard extends Component {

    componentDidMount = () => {
        this.getBackend();
    }

    getBackend = async () => {
        await axios.get(`${SERVER}/`)
        .then((res) => { 
            console.log(res.data);
            
        }).catch((err) => {
            console.error(err);
        });
    }
    render() { 
        return ( 
            <h1>Dashboard</h1>
         );
    }
}
 
export default Dashboard;