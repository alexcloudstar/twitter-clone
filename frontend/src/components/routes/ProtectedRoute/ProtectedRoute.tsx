/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Header } from 'components/Header';
import { Spinner } from 'components/Spinner';

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useMeQuery } from 'src/generated/graphql';

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
	const { data, loading } = useMeQuery();

	if (loading) return <Spinner />;

	return (
		<Route
			{...restOfProps}
			render={(props) =>
				data.me ? (
					<>
						<Header />
						<Component {...props} />
					</>
				) : (
					<Redirect to="/" />
				)
			}
		/>
	);
};

export default ProtectedRoute;
