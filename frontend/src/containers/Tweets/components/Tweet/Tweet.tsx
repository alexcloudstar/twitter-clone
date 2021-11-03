import { Grid } from '@mui/material';
import { UserAvatar } from 'components/globals';
import { Replies } from 'containers/Replies';
import React, { FC, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { socket } from 'src/config/socket';
import { Tweet, useGetUserQuery } from 'src/generated/graphql';
import Actions from '../Actions/Actions';
import MoreOptions from './components/MoreOptions';
import {
	Body,
	Header,
	StyledGridTweetBody,
	UserWrapper,
	Wrapper
} from './style';

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
	const [tweetPoints, setTweetPoints] = useState(points);

	const { data: userData, loading: userLoading } = useGetUserQuery({
		variables: { username: creatorUsername }
	});

	useLayoutEffect(() => {
		socket.on('upTweet', (data) => {
			if (data.id !== id) return setTweetPoints(points);

			const localPoints = data.upTweetResponse
				? tweetPoints + 1
				: tweetPoints - 1;
			setTweetPoints(localPoints);
		});
	}, [id, points, tweetPoints]);

	if (userLoading) return <div>Loading...</div>;

	return (
		<>
			<Wrapper>
				<Grid container>
					<Grid item sm={12} md={2}>
						<Link to={`/profile/${userData?.getUser.user.username}`}>
							<Header>
								<UserWrapper>
									<UserAvatar avatar={userData?.getUser.user.avatarUrl} />
								</UserWrapper>
							</Header>
						</Link>
					</Grid>
					<StyledGridTweetBody item sm={12} md={10}>
						<Header>
							<Link to={`/profile/${userData?.getUser.user.username}`}>
								<h3>{userData?.getUser.user.name}</h3>
							</Link>
							<MoreOptions tweetId={id} tweet={tweet} tweetImage={tweetImage} />
						</Header>
						<Body>
							<span>{tweet}</span>
							{tweetImage && (
								<img
									src={tweetImage}
									alt={`${userData?.getUser.user.username}-tweet`}
								/>
							)}
						</Body>
						{showActions && (
							<Actions id={id} points={tweetPoints} isReply={false} />
						)}
					</StyledGridTweetBody>
				</Grid>
			</Wrapper>
			{showReplies && (
				<Replies
					tweetId={id}
					creatorName={userData?.getUser.user.name}
					avatar={userData.getUser.user.avatarUrl}
					creatorUsername={userData?.getUser.user.username}
				/>
			)}
		</>
	);
};

export default Tweet;
