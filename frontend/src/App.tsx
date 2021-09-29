import { NotFound } from 'components/NotFound';
import ProtectedRoute from 'components/ProtectedRoute';
import { Home } from 'containers/Home';
import { Welcome } from 'containers/Welcome';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const App = (): JSX.Element => {
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/" component={Welcome} />
				<ProtectedRoute path="/home" component={Home} />

				<Route component={NotFound} />
			</Switch>
		</HashRouter>
	);
};

export default App;
