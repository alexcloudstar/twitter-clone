import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { ClickAwayListener, Grid } from '@mui/material';
import {
	Layout,
	LinkWrapper,
	StyledButton,
	StyledModal,
	StyledModalBox
} from 'components/globals';
import { CreateTweet } from 'components/Tweet/CreateTweet';
import { Stories } from 'containers/Stories';
import { Tweets } from 'containers/Tweets';
import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HomeWrapper } from './style';

const Home: FC = () => {
	return (
		<>
			<HomeWrapper>
				<Layout>
					<Grid item md={4}>
						<Stories />
						<Tweets />
					</Grid>
				</Layout>
			</HomeWrapper>
		</>
	);
};

export default Home;
