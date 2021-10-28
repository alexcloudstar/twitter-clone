import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { FC, useState } from 'react';
import { Tweet, useUpVoteReplyMutation } from 'src/generated/graphql';
import { ActionWrapper } from './style';

const UpReply: FC<Pick<Tweet, 'id' | 'points'>> = ({ id, points }) => {
	const [localPoints, setLocalPoints] = useState(points);

	const [upVoteReply] = useUpVoteReplyMutation();

	const onUpVote = () => {
		try {
			upVoteReply({
				variables: { replyId: id }
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

export default UpReply;
