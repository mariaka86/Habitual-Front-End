import { withAuth0 } from '@auth0/auth0-react';
// import { PageHeader } from 'antd';
import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
//import { Link } from "react-router-dom";
import AuthButton from './AuthButton.js';

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ color: 'white' }}>
          <Navbar.Brand>Habitual</Navbar.Brand>
          <NavItem>
            <AuthButton />
          </NavItem>
        </Navbar>

      </>
    )
  }
}

export default withAuth0(Header);

