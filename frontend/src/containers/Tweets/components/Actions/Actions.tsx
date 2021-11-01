import { ClickAwayListener } from '@mui/material';
import { CreateReply } from 'components/CreateReply';
import { StyledModal, StyledModalBox } from 'components/globals';
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
					<Link to={`/tweet/${id}`}>
						<Reply handleOpen={handleOpen} />
					</Link>
				)}
				<Retweet />
				{!isReply ? (
					<UpTweet id={id} points={points} />
				) : (
					<UpReply id={id} points={points} />
				)}
				<Save />
			</ActionsWrapper>
			<StyledModal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<ClickAwayListener onClickAway={handleClose}>
					<StyledModalBox>
						<CreateReply tweetId={id} handleCloseModal={handleClose} />
					</StyledModalBox>
				</ClickAwayListener>
			</StyledModal>
		</>
	);
};

export default Actions;
