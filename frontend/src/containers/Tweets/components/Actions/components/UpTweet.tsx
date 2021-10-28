import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { FC, useState } from 'react';
import { useUpVoteTweetMutation } from 'src/generated/graphql';
import { ActionsProps } from '../types';
import { ActionWrapper } from './style';

const UpTweet: FC<ActionsProps> = ({ id, points }) => {
	const [localPoints, setLocalPoints] = useState(points);

	const [upVoteTweet] = useUpVoteTweetMutation();

	const onUpVote = () => {
		try {
			upVoteTweet({
				variables: { tweetId: id }
			});
			setLocalPoints(localPoints + 1);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ActionWrapper>
			<span>{localPoints}</span>
			<FavoriteBorderIcon onClick={onUpVote} />
		</ActionWrapper>
	);
};

export default UpTweet;
