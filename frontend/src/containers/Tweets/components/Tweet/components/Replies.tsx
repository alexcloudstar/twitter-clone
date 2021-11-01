import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
	Tweet,
	useGetTweetRepliesQuery,
	useGetUserQuery,
	User
} from 'src/generated/graphql';
import { Actions } from '../..';
import { Body, Header, UserWrapper, Wrapper } from '../style';
import MoreOptions from './MoreOptions';
import _1 from 'src/assets/img/stories_avatars/_1.png';
import { UserAvatar } from 'components/globals';

type RepliesProps = {
	tweetId: User['id'];
	creatorName: User['name'];
	avatar: User['avatarUrl'];
};

const Replies: FC<RepliesProps> = ({ tweetId, creatorName, avatar }) => {
	const { data, loading } = useGetTweetRepliesQuery({
		variables: { tweetId }
	});

	if (loading) return <div>Loading...</div>;

	return (
		<>
			{data.getTweetReplies.map(({ creatorId, id, points, reply, tweetId }) => (
				<Wrapper key={id}>
					<Grid container>
						<Grid md={2}>
							<Link to={`/profile/${creatorId}`}>
								<UserWrapper>
									<UserAvatar avatar={avatar} />
								</UserWrapper>
							</Link>
						</Grid>
						<Grid md={10}>
							<Header>
								<Link to={`/profile/${creatorId}`}>
									<h3>{creatorName}</h3>
								</Link>
								<MoreOptions id={id} />
							</Header>
							<Body>
								<span>{reply}</span>
							</Body>
							<Actions id={id} points={points} isReply />
						</Grid>
					</Grid>
				</Wrapper>
			))}
		</>
	);
};

export default Replies;
