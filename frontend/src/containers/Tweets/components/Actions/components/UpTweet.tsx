import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Tooltip } from '@mui/material';
import React, { FC } from 'react';
import { socket } from 'src/config/socket';
import { Tweet, useUpVoteTweetMutation } from 'src/generated/graphql';
import { ActionWrapper } from './style';

const UpTweet: FC<Pick<Tweet, 'id' | 'points'>> = ({ id, points }) => {
	const [upVoteTweet] = useUpVoteTweetMutation();

	const onUpVote = async () => {
		try {
			const upTweetResponse = await upVoteTweet({
				variables: { tweetId: id }
			});

			socket.emit('upTweet', {
				id,
				upTweetResponse: upTweetResponse.data.upVoteTweet
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Tooltip title="Up Tweet" placement="bottom">
			<ActionWrapper>
				<span>{points}</span>
				<FavoriteBorderIcon onClick={onUpVote} />
			</ActionWrapper>
		</Tooltip>
	);
};

export default UpTweet;
