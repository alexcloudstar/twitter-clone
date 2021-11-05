import { SnackBar } from 'components/globals';
import React, { FC, useEffect, useState } from 'react';
import { socket } from 'src/config/socket';
import { useGetTweetsQuery } from 'src/generated/graphql';
import VirtualizedTweets from './components/Tweet/components/VirtualizedTweets';

const Tweets: FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [tweets, setTweets] = useState<any[]>();
	const { data, error } = useGetTweetsQuery();
	const [snackBarProps, setSnackBarProps] = useState({
		isOpen: false,
		message: null,
		variant: null
	});

	useEffect(() => {
		setTweets(data?.getTweets);
	}, [data]);

	useEffect(() => {
		socket.on('addTweet', ({ tweet }) => {
			setTweets([...tweets, tweet]);
			setSnackBarProps({
				isOpen: true,
				message: `${tweet.creatorName} tweeted: ${tweet.tweet} 💬`,
				variant: 'success'
			});
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

	if (error) return <div>Error...</div>;

	return (
		<>
			{tweets && <VirtualizedTweets rows={tweets} />}

			<SnackBar
				snackBarProps={snackBarProps}
				setSnackBarProps={setSnackBarProps}
			/>
		</>
	);
};

export default Tweets;
