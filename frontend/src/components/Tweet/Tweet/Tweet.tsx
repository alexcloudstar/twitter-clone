import React, { FC } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Tweet, useGetTweetQuery } from 'src/generated/graphql';
import Replies from '../Replies';
import ReplyTweet from '../ReplyTweet/Reply';
import { TweetActions } from '../TweetActions';
import { CreatedAtWrapper, TweetWrapper, UsernameWrapper } from './style';

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
					<Link
						to={`/profile/${
							creatorUsername ? creatorUsername : data.getTweet.creatorUsername
						}`}
					>
						{tweet ? tweet : data.getTweet.tweet}{' '}
						<UsernameWrapper>
							@
							{creatorUsername
								? creatorUsername
								: data.getTweet.creatorUsername}
						</UsernameWrapper>
						<CreatedAtWrapper>
							{createdAt ? createdAt : data.getTweet.createdAt}
						</CreatedAtWrapper>
					</Link>
				</h5>
			</Link>
			<TweetActions
				tweetId={id ? id : data.getTweet.id}
				points={points ? points : data?.getTweet?.points}
			/>
			<ReplyTweet />
			<div>
				<Replies tweetId={id ? id : data.getTweet.id} />
			</div>
		</TweetWrapper>
	);
};

export default Tweet;
