import React, { FC } from 'react';
import { Tweet } from 'src/generated/graphql';
import { ActionsWrapper, Body, Header, UserWrapper, Wrapper } from './style';
import _1 from 'src/assets/img/stories_avatars/_1.png';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Actions from '../Actions/Actions';
import { Grid } from '@mui/material';
import MoreOptions from './components/MoreOptions';

type TweetProps = {
	showActions: boolean;
} & Tweet;

const Tweet: FC<TweetProps> = ({
	id,
	tweet,
	points,
	createdAt,
	creatorUsername,
	showActions = true
}) => {
	return (
		<Wrapper>
			<Grid container>
				<Grid md={2}>
					<Header>
						<UserWrapper>
							<img src={_1} alt={creatorUsername} />
						</UserWrapper>
					</Header>
				</Grid>
				<Grid md={10}>
					<Header>
						<h3>Alex Cloudstar</h3>
						<MoreOptions />
					</Header>
					<Body>
						<span>
							Hello guys, this is my peraonal portfolio website, i creating with
							html css and javascript. demo at http://kewcode.com , thank u .
							#webdev
						</span>
						<img
							src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
							alt=""
						/>
					</Body>
					{showActions && <Actions />}
				</Grid>
			</Grid>
		</Wrapper>
	);
};

export default Tweet;
