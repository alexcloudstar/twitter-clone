import { TweetsWrapper } from './style';
import React, { FC } from 'react';
import { useGetTweetsQuery } from 'src/generated/graphql';
import { Tweet } from './components';

const Tweets: FC = () => {
	const { data, loading, error } = useGetTweetsQuery();

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error...</div>;

	return (
		<TweetsWrapper>
			{data.getTweets.map(
				({
					id,
					createdAt,
					updatedAt,
					creatorId,
					points,
					tweet,
					voteStatus,
					creatorUsername
				}) => (
					<Tweet
						key={id}
						createdAt={createdAt}
						updatedAt={updatedAt}
						creatorId={creatorId}
						points={points}
						tweet={tweet}
						voteStatus={voteStatus}
						creatorUsername={creatorUsername}
						id={id}
						showActions
						showReplies={false}
					/>
				)
			)}
		</TweetsWrapper>
	);
};

export default Tweets;
