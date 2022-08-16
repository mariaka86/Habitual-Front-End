import { withAuth0 } from '@auth0/auth0-react';
// import { PageHeader } from 'antd';
import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';

class Header extends React.Component {
    render() {
      return (
<>
<h1>Habitual</h1>
{this.props.auth0.isAuthenticated ? (
    <LogoutButton />
) : (
    <LoginButton />
)}
</>


//         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{color: 'white'}}>
//           <Navbar.Brand>Habitual</Navbar.Brand>
//           <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
//           </Navbar>
     )
   }
 }

export default withAuth0(Header);          

