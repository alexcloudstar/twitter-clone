import { Header } from 'components/Header';
import { NotFound, ProtectedRoute } from 'components/routes';
import { Tweet } from 'components/Tweet';
import { Home } from 'containers/Home';
import { Profile } from 'containers/Profile';
import { Welcome } from 'containers/Welcome';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = (): JSX.Element => {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Welcome} />
					<ProtectedRoute path="/home" component={Home} />
					<ProtectedRoute path="/tweet/:id" component={Tweet} />
					<ProtectedRoute path="/profile/:id" component={Profile} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default App;
