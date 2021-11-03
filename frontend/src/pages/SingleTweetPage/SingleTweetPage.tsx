import { Grid } from '@mui/material';
import { Layout } from 'components/globals';
import { Tweet as TweetComp } from 'containers/Tweets/components/Tweet';
import React, { FC } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useGetTweetQuery } from 'src/generated/graphql';
import { TweetWrapper } from './style';

const Tweet: FC = () => {
	const match: { params: { id: string } } = useRouteMatch();

	const { data, loading, error } = useGetTweetQuery({
		variables: { tweetId: +match.params.id }
	});

	if (loading) return <div>Loading...</div>;

	return (
		<TweetWrapper>
			<Layout>
				<Grid item sm={12} md={4}>
					<TweetComp
						id={data.getTweet.id}
						tweet={data.getTweet.tweet}
						tweetImage={data.getTweet.tweetImage}
						creatorId={data.getTweet.creatorId}
						creatorName={data.getTweet.creatorName}
						creatorUsername={data.getTweet.creatorUsername}
						points={data.getTweet.points}
						voteStatus={data.getTweet.voteStatus}
						createdAt={data.getTweet.createdAt}
						updatedAt={data.getTweet.updatedAt}
						showActions
						showReplies
					/>
				</Grid>
			</Layout>
		</TweetWrapper>
	);
};

export default Tweet;
