import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Reply from './components/Reply';
import Retweet from './components/Retweet';
import Save from './components/Save';
import UpReply from './components/UpReply';
import UpTweet from './components/UpTweet';
import { ActionsWrapper } from './style';
import { ActionsProps } from './types';

const Actions: FC<ActionsProps> = ({ id, points, isReply }) => {
	return (
		<ActionsWrapper>
			<Link to={`/tweet/${id}`}>
				<Reply />
			</Link>
			<Retweet />
			{!isReply ? (
				<UpTweet id={id} points={points} />
			) : (
				<UpReply id={id} points={points} />
			)}
			<Save />
		</ActionsWrapper>
	);
};

export default Actions;
