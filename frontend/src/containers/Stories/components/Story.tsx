import React, { FC } from 'react';
import { StyledStory } from './style';

type StoryProps = {
	// borderColor: string; // TODO: add this as a prop back
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	avatarUrl: any;
};

const Story: FC<StoryProps> = ({ avatarUrl }) => (
	<StyledStory>
		<img src={avatarUrl} alt="username" />
	</StyledStory>
);

export default Story;
