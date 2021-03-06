import { Layout } from 'components/globals';
import { StyledGridMt } from 'components/globals/StyledGridMt/StyledGridMt';
import { Spinner } from 'components/Spinner';
import { Tweet as TweetComp } from 'containers/Tweets/components/Tweet';
import React, { FC, Suspense } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useGetTweetQuery } from 'src/generated/graphql';
import { TweetWrapper } from './style';

const Tweet: FC = () => {
	const match: { params: { id: string } } = useRouteMatch();

	const { data } = useGetTweetQuery({
		variables: { tweetId: +match.params.id }
	});

	return (
		<>
			<Suspense fallback={<Spinner />}>
				<TweetWrapper>
					<Layout>
						<StyledGridMt item md={4}>
							<TweetComp
								id={data?.getTweet.id}
								tweet={data?.getTweet.tweet}
								tweetImage={data?.getTweet.tweetImage}
								creatorId={data?.getTweet.creatorId}
								creatorName={data?.getTweet.creatorName}
								creatorUsername={data?.getTweet.creatorUsername}
								points={data?.getTweet.points}
								voteStatus={data?.getTweet.voteStatus}
								createdAt={data?.getTweet.createdAt}
								updatedAt={data?.getTweet.updatedAt}
								showActions
								showReplies
							/>
						</StyledGridMt>
					</Layout>
				</TweetWrapper>
			</Suspense>
		</>
	);
};

export default Tweet;
