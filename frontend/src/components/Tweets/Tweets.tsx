import { TweetWrapper } from 'components/Tweet/style';
import Tweet from 'components/Tweet/Tweet';
import React, { FC } from 'react';
import { useGetTweetsQuery } from 'src/generated/graphql';

const Tweets: FC = () => {
	const { data, loading, error } = useGetTweetsQuery();

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error...</div>;

	return (
		<TweetWrapper>
			{data.getTweets.map(
				({
					id,
					createdAt,
					updatedAt,
					creatorId,
					points,
					tweet,
					voteStatus
				}) => (
					<Tweet
						key={id}
						createdAt={createdAt}
						updatedAt={updatedAt}
						creatorId={creatorId}
						points={points}
						tweet={tweet}
						voteStatus={voteStatus}
						id={0}
					/>
				)
			)}
		</TweetWrapper>
	);
};

export default Tweets;
