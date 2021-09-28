import React, { FC } from 'react';
import { HomeWrapper } from './styled';
import { HomeProps } from './types';
import HomeBg from 'src/assets/img/homeBg.png';

const Home: FC<HomeProps> = (): JSX.Element => (
	<HomeWrapper>
		<img src={HomeBg} alt="" />
		<h1>Home</h1>
	</HomeWrapper>
);

export default Home;
