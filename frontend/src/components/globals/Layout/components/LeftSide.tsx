import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { Grid } from '@mui/material';
import { CreateTweet } from 'components/CreateTweet';
import { LinkWrapper, Modal, StyledButton } from 'components/globals';
import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMeQuery } from 'src/generated/graphql';

const LeftSide: FC = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const { data } = useMeQuery();

	return (
		<>
			<Grid item sm={12} md={2}>
				<LinkWrapper>
					<NavLink to="/home" activeClassName="active">
						<HomeIcon /> <span>Home</span>
					</NavLink>
					<NavLink to={`/profile/${data.me.username}`} activeClassName="active">
						<AccountCircleIcon /> <span>Profile</span>
					</NavLink>
					<StyledButton variant="contained" onClick={handleOpen}>
						Tweet
					</StyledButton>
				</LinkWrapper>
			</Grid>
			<Modal open={open} onClose={handleClose}>
				<CreateTweet handleCloseModal={handleClose} />
			</Modal>
		</>
	);
};

export default LeftSide;
