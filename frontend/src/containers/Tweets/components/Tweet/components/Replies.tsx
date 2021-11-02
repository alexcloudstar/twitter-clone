import { Grid } from '@mui/material';
import { UserAvatar } from 'components/globals';
import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { socket } from 'src/config/socket';
import { useGetTweetRepliesQuery, User } from 'src/generated/graphql';
import { Actions } from '../..';
import { Body, Header, UserWrapper, Wrapper } from '../style';
import MoreOptions from './MoreOptions';

type RepliesProps = {
	tweetId: User['id'];
	creatorName: User['name'];
	avatar: User['avatarUrl'];
};

const Replies: FC<RepliesProps> = ({ tweetId, creatorName, avatar }) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [replies, setReplies] = useState<any>();
	const { data, loading } = useGetTweetRepliesQuery({
		variables: { tweetId }
	});

	useEffect(() => {
		setReplies(data?.getTweetReplies);
	}, [data?.getTweetReplies]);

	useEffect(() => {
		socket.on('addTweetReply', (reply) => {
			setReplies([...replies, reply.reply]);
		});

		return () => {
			socket.off('addTweetReply');
		};
	}, [replies]);

	if (loading) return <div>Loading...</div>;

	return (
		<>
			{replies?.map(({ creatorId, id, points, reply, tweetId }) => (
				<Wrapper key={id}>
					<Grid container>
						<Grid item md={2}>
							<Link to={`/profile/${creatorId}`}>
								<UserWrapper>
									<UserAvatar avatar={avatar} />
								</UserWrapper>
							</Link>
						</Grid>
						<Grid item md={10}>
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
