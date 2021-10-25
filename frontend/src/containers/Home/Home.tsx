import { CreateTweet } from 'components/Tweet/CreateTweet';
import { Tweets } from 'components/Tweet/Tweets';
import React, { FC } from 'react';
import { HomeWrapper } from './style';
import { HomeProps } from './types';

const Home: FC<HomeProps> = () => {
	return (
		<HomeWrapper>
			<div className="h-full grid grid-cols-3 gap-4">
				<div id="row1">
					<h1>Home</h1>
					<h1>Profile</h1>
					<h1>Tweet</h1>
				</div>
				<div id="row2" className="col-span-2">
					<CreateTweet />
					<Tweets />
				</div>
			</div>
		</HomeWrapper>
	);
};

export default Home;
