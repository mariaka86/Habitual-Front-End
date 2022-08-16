import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';

// created AuthButton in order to pull into Header easier.
const AuthButton = () => {
    this.props.auth0.isAuthenticated ? (
        <LogoutButton />
    ) : (
        <LoginButton />
    )
}

export default withAuth0(AuthButton);

