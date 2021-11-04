import { Layout } from 'components/globals';
import { StyledGridMt } from 'components/globals/StyledGridMt/StyledGridMt';
import { NotFound } from 'components/routes';
import { Spinner } from 'components/Spinner';
import React, { FC, Suspense } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useGetUserQuery } from 'src/generated/graphql';
import { formatBirthday } from 'utils/dateFormats';
import { Header, Tabs } from './components';
import { Body } from './components/Body';
import { ProfileWrapper } from './style';
import { ProfileProps } from './types';

const Profile: FC<ProfileProps> = () => {
	const match: { params: { username: string } } = useRouteMatch();

	const { data, error } = useGetUserQuery({
		variables: { username: match.params.username }
	});

	if (error) return <NotFound />;

	const formatedJoined = formatBirthday(+data?.getUser?.user?.createdAt);

	return (
		<>
			<Suspense fallback={<Spinner />}>
				<ProfileWrapper>
					<Layout>
						<StyledGridMt item md={4}>
							<Header {...data?.getUser.user} />
							<Body joined={formatedJoined} {...data?.getUser.user} />
							<Tabs username={data?.getUser.user.username} />
						</StyledGridMt>
					</Layout>
				</ProfileWrapper>
			</Suspense>
		</>
	);
};

export default Profile;
