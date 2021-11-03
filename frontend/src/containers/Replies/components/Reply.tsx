import { Grid } from '@mui/material';
import { UserAvatar } from 'components/globals';
import { Actions } from 'containers/Tweets/components';
import MoreOptions from 'containers/Tweets/components/Tweet/components/MoreOptions';
import {
	Body,
	Header,
	StyledGridTweetBody,
	UserWrapper,
	Wrapper
} from 'containers/Tweets/components/Tweet/style';
import React, { FC, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { socket } from 'src/config/socket';
import { Replies, User } from 'src/generated/graphql';

type ReplyProps = {
	creatorName: User['name'];
	creatorId: User['id'];
	avatar: User['avatarUrl'];
	replyId: Replies['id'];
	reply: Replies['reply'];
	points: Replies['points'];
};

const Reply: FC<ReplyProps> = ({
	avatar,
	creatorName,
	creatorId,
	replyId,
	reply,
	points
}) => {
	const [replyPoints, setReplyPoints] = useState(points);

	useLayoutEffect(() => {
		socket.on('upReply', (data) => {
			if (data.id !== replyId) return setReplyPoints(points);

			const localPoints = data.upReplyResponse
				? replyPoints + 1
				: replyPoints - 1;
			setReplyPoints(localPoints);
		});
	}, [replyId, points, replyPoints]);

	return (
		<Wrapper>
			<Grid container>
				<Grid item sm={12} md={2}>
					<Link to={`/profile/${creatorId}`}>
						<UserWrapper>
							<UserAvatar avatar={avatar} />
						</UserWrapper>
					</Link>
				</Grid>
				<StyledGridTweetBody item sm={12} md={10}>
					<Header>
						<Link to={`/profile/${creatorId}`}>
							<h3>{creatorName}</h3>
						</Link>
						<MoreOptions replyId={replyId} reply={reply} />
					</Header>
					<Body>
						<span>{reply}</span>
					</Body>
					<Actions id={replyId} points={replyPoints} isReply />
				</StyledGridTweetBody>
			</Grid>
		</Wrapper>
	);
};

export default Reply;
