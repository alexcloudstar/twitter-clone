import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
	useDeleteTweetMutation,
	useUpVoteTweetMutation
} from 'src/generated/graphql';
import {
	TweetActionDeleteWrapper,
	TweetActionReplyWrapper,
	TweetActionsWrapper,
	TweetActionUpVoteWrapper
} from './style';
import { TweetActionsProps } from './types';

const TweetActions: FC<TweetActionsProps> = ({ tweetId, points }) => {
	const [upVoteTweet] = useUpVoteTweetMutation();

	const onUpVote = () =>
		upVoteTweet({
			variables: { tweetId: tweetId, value: points > 0 ? -1 : 1 }
		});

	const [deleteTweet] = useDeleteTweetMutation();

	const onDeleteTweet = () => deleteTweet({ variables: { tweetId } });

	return (
		<TweetActionsWrapper>
			<TweetActionUpVoteWrapper onClick={onUpVote}>
				up vote {points > 0 && points}
			</TweetActionUpVoteWrapper>
			<Link to={`/tweet/${tweetId}`}>
				<TweetActionReplyWrapper>reply</TweetActionReplyWrapper>
			</Link>
			<TweetActionDeleteWrapper onClick={onDeleteTweet}>
				delete
			</TweetActionDeleteWrapper>
		</TweetActionsWrapper>
	);
};

export default TweetActions;
