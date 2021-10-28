import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { ClickAwayListener, Grid } from '@mui/material';
import {
	LinkWrapper,
	StyledButton,
	StyledModal,
	StyledModalBox
} from 'components/globals';
import { CreateTweet } from 'components/Tweet/CreateTweet';
import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSide: FC = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Grid item md={2}>
				<LinkWrapper>
					<NavLink to="/home" activeClassName="active">
						<HomeIcon /> <span>Home</span>
					</NavLink>
					<NavLink to="/profile/1" activeClassName="active">
						<AccountCircleIcon /> <span>Profile</span>
					</NavLink>
					<StyledButton variant="contained" onClick={handleOpen}>
						Tweet
					</StyledButton>
				</LinkWrapper>
			</Grid>
			<StyledModal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<ClickAwayListener onClickAway={handleClose}>
					<StyledModalBox>
						<CreateTweet handleCloseModal={handleClose} />
					</StyledModalBox>
				</ClickAwayListener>
			</StyledModal>
		</>
	);
};

export default LeftSide;
