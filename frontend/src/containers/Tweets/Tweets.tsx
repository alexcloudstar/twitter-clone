import React, { FC, useEffect, useState } from 'react';
import { socket } from 'src/config/socket';
import { useGetTweetsQuery } from 'src/generated/graphql';
import { Tweet } from './components';
import { TweetsWrapper } from './style';

const Tweets: FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [tweets, setTweets] = useState<any[]>();
	const { data, loading, error } = useGetTweetsQuery();

	useEffect(() => {
		setTweets(data?.getTweets);
	}, [data]);

	useEffect(() => {
		socket.on('addTweet', (tweet) => {
			setTweets([...tweets, tweet.tweet]);
		});

		return () => {
			socket.off('addTweet');
		};
	}, [tweets]);

	useEffect(() => {
		socket.on('deleteTweet', ({ tweetId }) => {
			const newTweets = tweets.filter((tweet) => tweet.id !== tweetId);

			setTweets(newTweets);
		});

		return () => {
			socket.off('deleteTweet');
		};
	}, [tweets]);

	useEffect(() => {
		socket.on('editTweet', (tweets) => {
			setTweets(tweets.tweets);
		});

		return () => {
			socket.off('editTweet');
		};
	}, [tweets]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error...</div>;

	console.log(tweets);

	return (
		<TweetsWrapper>
			{tweets?.map(
				({
					id,
					createdAt,
					updatedAt,
					creatorId,
					points,
					tweet,
					tweetImage,
					voteStatus,
					creatorUsername,
					creatorName
				}) => (
					<Tweet
						key={id}
						createdAt={createdAt}
						updatedAt={updatedAt}
						creatorId={creatorId}
						points={points}
						tweet={tweet}
						tweetImage={tweetImage}
						voteStatus={voteStatus}
						creatorUsername={creatorUsername}
						creatorName={creatorName}
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
