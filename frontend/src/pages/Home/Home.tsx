import { Grid } from '@mui/material';
import { Layout } from 'components/globals';
import { Stories } from 'containers/Stories';
import { Tweets } from 'containers/Tweets';
import React, { FC } from 'react';
import { HomeWrapper } from './style';

const Home: FC = () => {
	return (
		<>
			<HomeWrapper>
				<Layout>
					<Grid item sm={12} md={4}>
						<Stories />
						<Tweets />
					</Grid>
				</Layout>
			</HomeWrapper>
		</>
	);
};

export default Home;
