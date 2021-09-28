import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';
import GlobalStyles from './Theme/globalStyles';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache()
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
