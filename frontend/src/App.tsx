import { NotFound, ProtectedRoute } from 'components/routes';
import { Spinner } from 'components/Spinner';

import { Welcome } from 'containers/Welcome';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Profile, Tweet } from 'src/pages';

const App = (): JSX.Element => {
	return (
		<>
			<Suspense fallback={<Spinner />}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Welcome} />
						<ProtectedRoute path="/home" component={Home} />
						<ProtectedRoute path="/tweet/:id" component={Tweet} />
						<ProtectedRoute path="/profile/:username" component={Profile} />
						<Route component={NotFound} />
					</Switch>
				</BrowserRouter>
			</Suspense>
		</>
	);
};

export default App;
