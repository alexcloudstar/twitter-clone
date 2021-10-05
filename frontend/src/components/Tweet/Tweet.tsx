import React, { FC } from 'react';
import { Tweet, useDeleteTweetMutation } from 'src/generated/graphql';

const Tweet: FC<Tweet> = ({
	id,
	tweet,
	points,
	createdAt,
	creatorId,
	updatedAt,
	voteStatus,
	creatorUsername
}) => {
	const [deleteTweet] = useDeleteTweetMutation();

	const onClick = () => deleteTweet({ variables: { tweetId: id } });

	return (
		<div>
			<strong>Tweet</strong>
			<h5>
				Tweet text: <span>{tweet}</span>
			</h5>
			<h5>
				Creator: <span>{creatorUsername}</span>
			</h5>
			<br />
			<button onClick={onClick}>Delete post</button>
			<br />
			<hr />
			<br />
		</div>
	);
};

export default Tweet;
