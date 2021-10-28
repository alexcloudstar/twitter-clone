import { Tweet } from 'src/generated/graphql';

export type ActionsProps = Pick<Tweet, 'id' | 'points'>;
