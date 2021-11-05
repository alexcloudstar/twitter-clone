import { Tweet } from 'src/generated/graphql';

export type CreateTweetProps = {
	handleCloseModal: () => void;
};

export type CreateTweetState = {
	tweet: Tweet['tweet'];
};
