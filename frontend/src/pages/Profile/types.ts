import { User } from 'src/generated/graphql';

export type ProfileProps = {
	props?: unknown;
};

export type UserDataProps = { handleClose?: () => void } & Omit<
	User,
	'updatedAt'
>;
