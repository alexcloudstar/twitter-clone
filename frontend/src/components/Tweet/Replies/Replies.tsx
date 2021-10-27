import React, { FC } from 'react';
import { useGetTweetRepliesQuery } from 'src/generated/graphql';
import { Reply } from '../Reply';
import { RepliesWrapper } from './style';
import { RepliesProps } from './types';

const Replies: FC<RepliesProps> = ({ tweetId }) => {
	const { data, loading } = useGetTweetRepliesQuery({
		variables: { tweetId }
	});

	if (loading) return <div>Loading...</div>;

	return (
		<RepliesWrapper>
			{data.getTweetReplies.map(({ id, reply, points, creatorId, tweetId }) => (
				<Reply
					key={id}
					id={id}
					reply={reply}
					points={points}
					creatorId={creatorId}
					tweetId={tweetId}
					createdAt={''}
					updatedAt={''}
				/>
			))}
		</RepliesWrapper>
	);
};

export default Replies;
