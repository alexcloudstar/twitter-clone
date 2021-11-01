import { Grid } from '@mui/material';
import { UserAvatar } from 'components/globals';
import React, { FC } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import _1 from 'src/assets/img/stories_avatars/_1.png';
import {
	Tweet,
	useGetTweetQuery,
	useGetUserQuery
} from 'src/generated/graphql';
import Actions from '../Actions/Actions';
import MoreOptions from './components/MoreOptions';
import Replies from './components/Replies';
import { Body, Header, UserWrapper, Wrapper } from './style';

type TweetProps = {
	showActions: boolean;
	showReplies: boolean;
} & Omit<Tweet, 'creator'>;

const Tweet: FC<TweetProps> = ({
	id,
	tweet,
	tweetImage,
	points,
	creatorName,
	creatorUsername,
	creatorId,
	showActions,
	showReplies
}) => {
	const match: { params: { id: string } } = useRouteMatch();

	const { data, loading } = useGetTweetQuery({
		variables: { tweetId: +match.params.id },
		skip: !!id
	});

	const { data: userData, loading: userLoading } = useGetUserQuery({
		variables: { username: creatorUsername }
	});

	if (loading || userLoading) return <div>Loading...</div>;

	return (
		<>
			<Wrapper>
				<Grid container>
					<Grid md={2}>
						<Link to={`/profile/${userData?.getUser.user.username}`}>
							<Header>
								<UserWrapper>
									<UserAvatar avatar={userData?.getUser.user.avatarUrl} />
								</UserWrapper>
							</Header>
						</Link>
					</Grid>
					<Grid md={10}>
						<Header>
							<Link to={`/profile/${userData?.getUser.user.username}`}>
								<h3>{userData?.getUser.user.name}</h3>
							</Link>
							<MoreOptions
								id={id || data.getTweet.id}
								tweet={tweet || data.getTweet.tweet}
							/>
						</Header>
						<Body>
							<span>{tweet}</span>
							<img
								src={tweetImage}
								alt={`${userData?.getUser.user.username}-tweet`}
							/>
						</Body>
						{showActions && <Actions id={id} points={points} isReply={false} />}
					</Grid>
				</Grid>
			</Wrapper>
			{showReplies && (
				<Replies
					tweetId={id}
					creatorName={userData?.getUser.user.name}
					avatar={userData.getUser.user.avatarUrl}
				/>
			)}
		</>
	);
};

export default Tweet;
