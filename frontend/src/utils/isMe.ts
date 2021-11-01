import { User } from 'src/generated/graphql';

export const isMe = (user: User['username'], me: User['username']): boolean =>
	user === me;
