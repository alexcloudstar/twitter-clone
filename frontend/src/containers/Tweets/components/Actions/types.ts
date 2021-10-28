import { Tweet } from 'src/generated/graphql';

export type ActionsProps = {
	isReply: boolean;
} & Pick<Tweet, 'id' | 'points'>;
