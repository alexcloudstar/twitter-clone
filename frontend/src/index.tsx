import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import GlobalStyles from './Theme/globalStyles';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const client = new ApolloClient({
	uri: process.env.REACT_APP_API_URL,
	cache: new InMemoryCache(),
	credentials: 'include'
});

const theme = createTheme();

ReactDOM.render(
	<>
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<App />
			</ThemeProvider>
		</ApolloProvider>
	</>,
	document.getElementById('root')
);
