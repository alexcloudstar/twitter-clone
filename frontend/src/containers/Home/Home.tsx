import React, { FC } from 'react';
import { HomeWrapper } from './style';
import { HomeProps } from './types';

const Home: FC<HomeProps> = () => {
	return (
		<HomeWrapper>
			<h1>Home</h1>
		</HomeWrapper>
	);
};

export default Home;
