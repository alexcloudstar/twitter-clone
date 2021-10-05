import { TweetActions } from 'components/TweetActions';
import React, { FC } from 'react';
import { useRouteMatch } from 'react-router-dom';
import {
	Tweet,
	useGetTweetQuery,
	useGetTweetsQuery
} from 'src/generated/graphql';
import { TweetWrapper, UsernameWrapper } from './style';

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
	const match: { params: { id: string } } = useRouteMatch();

	const { data, loading, error } = useGetTweetQuery({
		variables: { tweetId: +match.params.id },
		skip: !!id
	});

	if (loading) return <div>Loading...</div>;

	return (
		<TweetWrapper tweetId={id}>
			<h5>
				{tweet ? tweet : data.getTweet.tweet}{' '}
				<UsernameWrapper>
					@{creatorUsername ? creatorUsername : data.getTweet.creatorUsername}
				</UsernameWrapper>
			</h5>
			<TweetActions
				tweetId={id ? id : data.getTweet.id}
				points={points ? points : data?.getTweet?.points}
			/>
		</TweetWrapper>
	);
};

export default Tweet;
