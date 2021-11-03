import { Layout } from 'components/globals';
import { StyledGridMt } from 'components/globals/StyledGridMt/StyledGridMt';
import { Stories } from 'containers/Stories';
import { Tweets } from 'containers/Tweets';
import React, { FC } from 'react';
import { HomeWrapper } from './style';

const Home: FC = () => {
	return (
		<>
			<HomeWrapper>
				<Layout>
					<StyledGridMt item md={4}>
						<Stories />
						<Tweets />
					</StyledGridMt>
				</Layout>
			</HomeWrapper>
		</>
	);
};

export default Home;
