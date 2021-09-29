/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useMeQuery } from 'src/generated/graphql';

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
	const { data, loading } = useMeQuery();

	if (loading) return <div>Loading...</div>;

	return (
		<Route
			{...restOfProps}
			render={(props) =>
				data.me ? <Component {...props} /> : <Redirect to="/" />
			}
		/>
	);
};

export default ProtectedRoute;
