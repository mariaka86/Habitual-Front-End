import { withAuth0 } from '@auth/auth0-react';
import React from 'react';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';
// import Profile from './Profile.js';


class App extends React.Component {
  render() {
    return (
      <>
      {this.props.auth0.isAuthenticated ? (
        <LogoutButton />
      ) : (
        <LoginButton />
      )}
      </>
    )
  }
}
export default withAuth0(App);
