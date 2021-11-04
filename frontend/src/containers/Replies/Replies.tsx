import Reply from './components/Reply';
import React, { FC, useEffect, useState } from 'react';
import { socket } from 'src/config/socket';
import { Tweet, useGetTweetRepliesQuery, User } from 'src/generated/graphql';

type RepliesProps = {
	tweetId: Tweet['id'];
	creatorName: User['name'];
	creatorUsername: User['username'];
	avatar: User['avatarUrl'];
};

const Replies: FC<RepliesProps> = ({ tweetId, creatorName, avatar }) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [replies, setReplies] = useState<any[]>();

	const { data } = useGetTweetRepliesQuery({
		variables: { tweetId }
	});

	useEffect(() => {
		setReplies(data?.getTweetReplies);
	}, [data]);

	useEffect(() => {
		socket.on('addTweetReply', (reply) => {
			setReplies([...replies, reply.reply]);
		});

		return () => {
			socket.off('addTweetReply');
		};
	}, [replies]);

	useEffect(() => {
		socket.on('deleteReply', ({ replyId }) => {
			const newReplies = replies.filter((reply) => reply.id !== replyId);

			setReplies(newReplies);
		});

		return () => {
			socket.off('deleteReply');
		};
	}, [replies]);

	useEffect(() => {
		socket.on('editReply', ({ replies }) => {
			setReplies(replies);
		});

		return () => {
			socket.off('editReply');
		};
	}, []);

	return (
		<>
			{replies?.map(({ creatorId, id, points, reply }) => (
				<Reply
					key={id}
					replyId={id}
					points={points}
					reply={reply}
					avatar={avatar}
					creatorId={creatorId}
					creatorName={creatorName}
				/>
			))}
		</>
	);
};

export default Replies;
