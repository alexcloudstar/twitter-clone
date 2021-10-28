import React, { FC } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Tweet, useGetTweetQuery } from 'src/generated/graphql';
import { formatDate } from 'utils/dateFormats';
import Footer from './components/Footer';
import Header from './components/Header';
import { TweetContentWrapper, TweetWrapper } from './style';

const Tweet: FC<Tweet> = ({
	id,
	tweet,
	points,
	createdAt,
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
			<Header
				creatorUsername={
					creatorUsername ? creatorUsername : data?.getTweet?.creatorUsername
				}
				tweet={tweet ? tweet : data?.getTweet?.tweet}
				createdAt={
					createdAt
						? formatDate({ date: +createdAt, formatDate: 'MMM dd' })
						: formatDate({
								date: +data?.getTweet?.createdAt,
								formatDate: 'MMM'
						  })
				}
			/>
			<TweetContentWrapper>
				{tweet ? tweet : data?.getTweet?.tweet}
			</TweetContentWrapper>
			<Footer
				tweetId={id ? id : data?.getTweet?.id}
				points={points ? points : data?.getTweet?.points}
			/>
		</TweetWrapper>
	);
};

export default Tweet;
