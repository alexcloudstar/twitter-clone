import { Grid } from '@mui/material';
import { Layout } from 'components/globals';
import { format } from 'date-fns';
import React, { FC } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useGetUserQuery } from 'src/generated/graphql';
import { Header, Tabs } from './components';
import { Body } from './components/Body';
import { ProfileWrapper } from './style';
import { ProfileProps } from './types';

const Profile: FC<ProfileProps> = () => {
	const match: { params: { id: string } } = useRouteMatch();

	const { data, loading } = useGetUserQuery({
		variables: { user_id: +match.params.id }
	});

	if (loading) return <div>Loading...</div>;

	const formatedJoined = format(
		new Date(+data.getUser.user.createdAt),
		'LLLL, dd, yyyy'
	);

	return (
		<ProfileWrapper>
			<Layout>
				<Grid item md={4}>
					<Header />
					<Body joined={formatedJoined} {...data.getUser.user} />
					<Tabs />
				</Grid>
			</Layout>
		</ProfileWrapper>
	);
};

export default Profile;
