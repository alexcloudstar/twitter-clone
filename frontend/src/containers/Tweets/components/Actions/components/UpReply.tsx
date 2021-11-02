import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { FC } from 'react';
import { socket } from 'src/config/socket';
import { Tweet, useUpVoteReplyMutation } from 'src/generated/graphql';
import { ActionWrapper } from './style';

const UpReply: FC<Pick<Tweet, 'id' | 'points'>> = ({ id, points }) => {
	const [upVoteReply] = useUpVoteReplyMutation();

	const onUpVote = async () => {
		try {
			const upReplyResponse = await upVoteReply({
				variables: { replyId: id }
			});

			socket.emit('upReply', {
				id,
				upReplyResponse: upReplyResponse.data.upVoteReply
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ActionWrapper>
			<span>{points}</span>
			<FavoriteBorderIcon onClick={onUpVote} />
		</ActionWrapper>
	);
};

export default UpReply;
