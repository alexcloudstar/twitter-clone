import { User } from 'src/generated/graphql';

export type UserDataProps = { handleClose?: () => void } & Omit<
	User,
	'updatedAt'
>;
