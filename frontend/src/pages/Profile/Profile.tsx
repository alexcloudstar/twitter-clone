import { Layout } from 'components/globals';
import { NotFound } from 'components/routes';
import React, { FC } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useGetUserQuery } from 'src/generated/graphql';
import { formatBirthday } from 'utils/dateFormats';
import { Header, Tabs } from './components';
import { Body } from './components/Body';
import { ProfileWrapper, StyledGrid } from './style';
import { ProfileProps } from './types';

const Profile: FC<ProfileProps> = () => {
	const match: { params: { username: string } } = useRouteMatch();

	const { data, loading, error } = useGetUserQuery({
		variables: { username: match.params.username }
	});

	if (loading) return <div>Loading...</div>;

	if (error) return <NotFound />;

	const formatedJoined = formatBirthday(+data.getUser.user.createdAt);

	return (
		<ProfileWrapper>
			<Layout>
				<StyledGrid item md={4}>
					<Header {...data.getUser.user} />
					<Body joined={formatedJoined} {...data.getUser.user} />
					<Tabs username={data.getUser.user.username} />
				</StyledGrid>
			</Layout>
		</ProfileWrapper>
	);
};

export default Profile;
