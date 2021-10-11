import { TweetActions } from '../TweetActions';
import React, { FC } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import {
	Tweet,
	useGetTweetQuery,
	useGetTweetsQuery
} from 'src/generated/graphql';
import { TweetWrapper, UsernameWrapper } from './style';
import ReplyTweet from '../ReplyTweet/CreateTweet';

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
			<Link to={`/tweet/${id ? id : data.getTweet.id}`}>
				<h5>
					{tweet ? tweet : data.getTweet.tweet}{' '}
					<Link
						to={`/profile/${
							creatorUsername ? creatorUsername : data.getTweet.creatorUsername
						}`}
					>
						<UsernameWrapper>
							@
							{creatorUsername
								? creatorUsername
								: data.getTweet.creatorUsername}
						</UsernameWrapper>
					</Link>
				</h5>
			</Link>
			<TweetActions
				tweetId={id ? id : data.getTweet.id}
				points={points ? points : data?.getTweet?.points}
			/>
			<ReplyTweet />
			<div>
				<h1>TODO: Add Replies component & map over them</h1>
			</div>
		</TweetWrapper>
	);
};

export default Tweet;
