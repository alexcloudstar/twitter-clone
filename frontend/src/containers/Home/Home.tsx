import { Grid } from '@mui/material';
import { Layout } from 'components/globals';
import { CreateTweet } from 'components/Tweet/CreateTweet';
import { Tweets } from 'components/Tweet/Tweets';
import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HomeWrapper, LinkWrapper, StyledButton } from './style';
import { HomeProps } from './types';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Stories } from 'containers/Stories';

const Home: FC<HomeProps> = () => {
	return (
		<HomeWrapper>
			<Layout>
				<Grid item md={2}>
					<LinkWrapper>
						<NavLink to="/home" activeClassName="active">
							<HomeIcon /> <span>Home</span>
						</NavLink>
						<NavLink to="/profile/1" activeClassName="active">
							<AccountCircleIcon /> <span>Profile</span>
						</NavLink>
						<StyledButton variant="contained">Tweet</StyledButton>
					</LinkWrapper>
				</Grid>
				<Grid item md={4}>
					<Stories />
					<div id="row2">
						<CreateTweet />
						<Tweets />
					</div>
				</Grid>
				<Grid item md={3}>
					<h3>Third row</h3>
				</Grid>
			</Layout>
		</HomeWrapper>

		// </HomeWrapper>
	);
};

export default Home;
