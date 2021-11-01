export type CreateReplyProps = {
	tweetId: number;
	handleCloseModal: () => void;
};

export type CreateReplyState = {
	reply: string;
};
