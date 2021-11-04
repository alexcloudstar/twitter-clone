import { ClickAwayListener, Tooltip } from '@mui/material';
import { CreateReply } from 'components/CreateReply';
import { Modal } from 'components/globals';

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
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<ActionsWrapper>
				{!isReply && (
					<Tooltip title="Reply" placement="bottom">
						<Link to={`/tweet/${id}`}>
							<Reply handleOpen={handleOpen} />
						</Link>
					</Tooltip>
				)}
				<Retweet />
				{!isReply ? (
					<UpTweet id={id} points={points} />
				) : (
					<UpReply id={id} points={points} />
				)}
				<Save />
			</ActionsWrapper>
			<Modal open={open} onClose={handleClose}>
				<Tooltip title="Create Reply" placement="bottom">
					<CreateReply tweetId={id} handleCloseModal={handleClose} />
				</Tooltip>
			</Modal>
		</>
	);
};

export default Actions;
