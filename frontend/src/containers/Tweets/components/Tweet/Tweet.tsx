import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { useRouteMatch } from 'react-router-dom';
import _1 from 'src/assets/img/stories_avatars/_1.png';
import { Tweet, useGetTweetQuery } from 'src/generated/graphql';
import Actions from '../Actions/Actions';
import MoreOptions from './components/MoreOptions';
import { Body, Header, UserWrapper, Wrapper } from './style';

type TweetProps = {
	showActions: boolean;
} & Tweet;

const Tweet: FC<TweetProps> = ({
	id,
	tweet,
	points,
	createdAt,
	creatorUsername,
	showActions = true
}) => {
	const match: { params: { id: string } } = useRouteMatch();

	const { data, loading, error } = useGetTweetQuery({
		variables: { tweetId: +match.params.id },
		skip: !!id
	});

	if (loading) return <div>Loading...</div>;

	return (
		<Wrapper>
			<Grid container>
				<Grid md={2}>
					<Header>
						<UserWrapper>
							<img
								src={_1}
								alt={creatorUsername || data?.getTweet.creatorUsername}
							/>
						</UserWrapper>
					</Header>
				</Grid>
				<Grid md={10}>
					<Header>
						<h3>Alex Cloudstar</h3>
						<MoreOptions />
					</Header>
					<Body>
						<span>{tweet || data?.getTweet.tweet}</span>
						<img
							src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
							alt=""
						/>
					</Body>
					{showActions && (
						<Actions
							id={id || data?.getTweet.id}
							points={points || data?.getTweet.points}
						/>
					)}
				</Grid>
			</Grid>
		</Wrapper>
	);
};

export default Tweet;
