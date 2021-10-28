import React, { FC, useState } from 'react';
import { MoreOptionsWrapper } from './style';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Menu, MenuItem } from '@mui/material';
import { Tweet, useDeleteTweetMutation } from 'src/generated/graphql';
import { SnackBar } from 'components/globals';

type MoreOptionsProps = Pick<Tweet, 'id'>;

const MoreOptions: FC<MoreOptionsProps> = ({ id }) => {
	const [snackBarProps, setSnackBarProps] = useState({
		isOpen: false,
		message: null,
		variant: null
	});

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
				message: 'Oops, there was an error ⚠️',
				variant: 'info'
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
				<MenuItem onClick={handleClose}>Edit Tweet</MenuItem>
				<MenuItem onClick={handleClose}>Action 3</MenuItem>
			</Menu>
		</>
	);
};

export default MoreOptions;
