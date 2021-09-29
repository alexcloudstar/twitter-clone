import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';
import GlobalStyles from './Theme/globalStyles';

const client = new ApolloClient({
	uri: process.env.REACT_APP_API_URL,
	cache: new InMemoryCache(),
	credentials: 'include'
});

ReactDOM.render(
	<>
		<ApolloProvider client={client}>
			<GlobalStyles />
			<App />
		</ApolloProvider>
		,
	</>,
	document.getElementById('root')
);
