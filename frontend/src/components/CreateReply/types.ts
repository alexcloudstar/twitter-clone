import { Replies, Tweet } from 'src/generated/graphql';

export type CreateReplyProps = {
	tweetId: Tweet['id'];
	handleCloseModal: () => void;
};

export type CreateReplyState = {
	reply: Replies['reply'];
};
