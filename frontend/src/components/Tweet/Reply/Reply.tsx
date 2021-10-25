import React, { FC } from 'react';
import {
	Replies,
	ReplyToTweetProps,
	useGetUserQuery
} from 'src/generated/graphql';
import { Tweet } from '..';
import { ReplyWrapper } from './style';

const Reply: FC<Replies> = ({
	id,
	reply,
	points,
	creatorId,
	tweetId,
	createdAt,
	updatedAt
}) => {
	const { loading, data } = useGetUserQuery({
		variables: { user_id: creatorId }
	});

	if (loading) return <div>Loading...</div>;

	const { email, username, id: userId } = data.getUser.user;

	return (
		<ReplyWrapper>
			<Tweet
				tweet={reply}
				createdAt={createdAt}
				updatedAt={updatedAt}
				creatorId={creatorId}
				points={points}
				id={id}
				creatorUsername={username}
			/>
		</ReplyWrapper>
	);
};

export default Reply;
