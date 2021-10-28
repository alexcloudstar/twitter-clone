import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { Grid } from '@mui/material';
import { StyledButton, Layout, LinkWrapper } from 'components/globals';
import React, { FC } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { useGetTweetQuery } from 'src/generated/graphql';
import { TweetWrapper } from './style';
import { Tweet as TweetComp } from 'containers/Tweets/components/Tweet';

const Tweet: FC = () => {
	const match: { params: { id: string } } = useRouteMatch();

	const { data, loading, error } = useGetTweetQuery({
		variables: { tweetId: +match.params.id }
	});

	if (loading) return <div>Loading...</div>;

	return (
		<TweetWrapper>
			<Layout>
				<Grid item md={4}>
					<TweetComp
						createdAt={data.getTweet.createdAt}
						updatedAt={data.getTweet.updatedAt}
						creatorId={data.getTweet.creatorId}
						points={data.getTweet.points}
						tweet={data.getTweet.tweet}
						voteStatus={data.getTweet.voteStatus}
						creatorUsername={data.getTweet.creatorUsername}
						id={data.getTweet.id}
						showActions
						showReplies
					/>
				</Grid>
			</Layout>
		</TweetWrapper>
	);
};

export default Tweet;
