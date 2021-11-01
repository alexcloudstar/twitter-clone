import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Menu, MenuItem } from '@mui/material';
import { Modal, SnackBar } from 'components/globals';
import React, { FC, useState } from 'react';
import { Tweet, useDeleteTweetMutation } from 'src/generated/graphql';
import { EditForm } from './EditForm';
import { MoreOptionsWrapper } from './style';

type MoreOptionsProps = {
	tweet?: Tweet['tweet'];
	tweetImage?: Tweet['tweetImage'];
} & Pick<Tweet, 'id'>;

const MoreOptions: FC<MoreOptionsProps> = ({ id, tweet, tweetImage }) => {
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

	const onDeleteTweet = () => {
		try {
			deleteTweet({ variables: { tweetId: id } });
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
				variant: 'danger'
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
				<MenuItem onClick={onDeleteTweet}>Delete Tweet</MenuItem>
				<MenuItem onClick={handleOpenEditModal}>Edit Tweet</MenuItem>
				<MenuItem onClick={handleClose}>Action 3</MenuItem>
			</Menu>

			<Modal open={openEditModal} onClose={handleCloseEditModal}>
				<EditForm
					tweetId={id}
					tweet={tweet}
					tweetImage={tweetImage}
					handleClose={handleCloseEditModal}
				/>
			</Modal>
		</>
	);
};

export default MoreOptions;
