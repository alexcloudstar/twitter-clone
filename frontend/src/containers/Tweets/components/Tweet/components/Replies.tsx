import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Tweet, useGetTweetRepliesQuery } from 'src/generated/graphql';
import { Actions } from '../..';
import { Body, Header, Wrapper } from '../style';
import MoreOptions from './MoreOptions';
import _1 from 'src/assets/img/stories_avatars/_1.png';

type RepliesProps = { tweetId: Tweet['id'] };

const Replies: FC<RepliesProps> = ({ tweetId }) => {
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
								<img src={_1} alt={`${creatorId}`} />
							</Link>
						</Grid>
						<Grid md={10}>
							<Header>
								<Link to={`/profile/${creatorId}`}>
									<h3>Alex Cloudstar</h3>
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
