import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
	<Auth0Provider
		domain={process.env.REACT_APP_AUTH_DOMAIN}
		clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
		redirectUri={process.env.REACT_APP_AUTH_REDIRECT_URI_REACT_SITE_URL}
	>
		<ChakraProvider theme={theme}>
			<BrowserRouter>
			<App />
			</BrowserRouter>
		</ChakraProvider>
	</Auth0Provider>,
	document.getElementById('root')
);
