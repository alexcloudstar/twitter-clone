import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { Grid } from '@mui/material';
import { Button, Layout, LinkWrapper } from 'components/globals';
import { Tweets } from 'containers/Tweets';
import { Stories } from 'containers/Stories';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { HomeWrapper } from './style';

const Home: FC = () => {
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
						<Button variant="contained">Tweet</Button>
					</LinkWrapper>
				</Grid>
				<Grid item md={4}>
					<Stories />

					{/* <CreateTweet /> */}
					<Tweets />
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
