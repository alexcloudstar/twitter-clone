import { NotFound, ProtectedRoute } from 'components/routes';
import { Welcome } from 'containers/Welcome';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Profile, Tweet } from 'src/pages';
import { useMeQuery } from './generated/graphql';

const App = (): JSX.Element => {
	const { data, loading } = useMeQuery();

	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Welcome} />
					<ProtectedRoute path="/home" component={Home} />
					<ProtectedRoute path="/tweet/:id" component={Tweet} />
					<ProtectedRoute path="/profile/:username" component={Profile} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default App;
