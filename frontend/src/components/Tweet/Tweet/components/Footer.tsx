import { TweetActions } from 'components/Tweet';
import Replies from 'components/Tweet/Replies';
import ReplyTweet from 'components/Tweet/ReplyTweet/Reply';
import React, { FC } from 'react';
import { FooterProps } from '../types';

const Footer: FC<FooterProps> = ({ tweetId, points }) => {
	return (
		<>
			<TweetActions tweetId={tweetId} points={points} />
			<ReplyTweet />
			<div>
				<Replies tweetId={tweetId} />
			</div>
		</>
	);
};

export default Footer;
