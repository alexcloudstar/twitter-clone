import React, { FC } from 'react';
import Reply from './components/Reply';
import Retweet from './components/Retweet';
import Save from './components/Save';
import UpTweet from './components/UpTweet';
import { ActionsWrapper } from './style';

const Actions: FC = () => {
	return (
		<ActionsWrapper>
			<Reply />
			<Retweet />
			<UpTweet />
			<Save />
		</ActionsWrapper>
	);
};

export default Actions;
