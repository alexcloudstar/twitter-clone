import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Menu, MenuItem } from '@mui/material';
import { Modal, SnackBar } from 'components/globals';
import EditReply from 'containers/Replies/components/EditReply';
import React, { FC, useState } from 'react';
import { socket } from 'src/config/socket';
import {
	Replies,
	Tweet,
	useDeleteReplyMutation,
	useDeleteTweetMutation
} from 'src/generated/graphql';
import { EditForm } from './EditForm';
import { MoreOptionsWrapper } from './style';

type MoreOptionsProps = {
	tweet?: Tweet['tweet'];
	tweetImage?: Tweet['tweetImage'];
	tweetId?: Tweet['id'];
	replyId?: Replies['id'];
	reply?: Replies['reply'];
};

const MoreOptions: FC<MoreOptionsProps> = ({
	tweetId,
	tweet,
	tweetImage,
	replyId,
	reply
}) => {
	const [snackBarProps, setSnackBarProps] = useState({
		isOpen: false,
		message: null,
		variant: null
	});
	const [openEditModal, setOpenEditModal] = useState(false);
	const handleOpenEditModal = () => setOpenEditModal(true);
	const handleCloseEditModal = () => setOpenEditModal(false);

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const [deleteTweet] = useDeleteTweetMutation();
	const [deleteReply] = useDeleteReplyMutation();

	const onDeleteTweet = async () => {
		try {
			await deleteTweet({ variables: { tweetId: tweetId } });

			socket.emit('deleteTweet', { tweetId });
			setSnackBarProps({
				isOpen: true,
				message: 'Tweet deleted successfully 🎉',
				variant: 'success'
			});
		} catch (error) {
			console.log(error);
			setSnackBarProps({
				isOpen: true,
				message: 'Oops, there was an error 😢',
				variant: 'error'
			});
		}
	};

	const onDeleteReply = async () => {
		try {
			await deleteReply({ variables: { replyId: replyId } });

			socket.emit('deleteReply', { replyId });
			setSnackBarProps({
				isOpen: true,
				message: 'Reply deleted successfully 🎉',
				variant: 'success'
			});
		} catch (error) {
			console.log(error);
			setSnackBarProps({
				isOpen: true,
				message: 'Oops, there was an error 😢',
				variant: 'error'
			});
		}
	};

	return (
		<>
			<SnackBar
				snackBarProps={snackBarProps}
				setSnackBarProps={setSnackBarProps}
			/>
			<MoreOptionsWrapper
				id="demo-positioned-button"
				aria-controls="demo-positioned-menu"
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<MoreHorizIcon />
			</MoreOptionsWrapper>

			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left'
				}}
			>
				<MenuItem onClick={tweet ? onDeleteTweet : onDeleteReply}>
					Delete {tweet ? 'Tweet' : 'Reply'}
				</MenuItem>
				<MenuItem onClick={handleOpenEditModal}>
					Edit {tweet ? 'Tweet' : 'Reply'}
				</MenuItem>
				<MenuItem onClick={handleClose}>Action 3</MenuItem>
			</Menu>

			<Modal open={openEditModal} onClose={handleCloseEditModal}>
				{reply ? (
					<EditReply
						replyId={replyId}
						reply={reply}
						handleClose={handleCloseEditModal}
					/>
				) : (
					<EditForm
						tweetId={tweetId}
						tweet={tweet}
						tweetImage={tweetImage}
						handleClose={handleCloseEditModal}
					/>
				)}
			</Modal>
		</>
	);
};

export default MoreOptions;
