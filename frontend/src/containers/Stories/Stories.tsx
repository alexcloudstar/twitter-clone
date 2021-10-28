import React, { FC } from 'react';
import { AddStoryWrapper, StoriesWrapper } from './style';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Story from './components/Story';
import _1 from 'src/assets/img/stories_avatars/_1.png';
import _2 from 'src/assets/img/stories_avatars/_2.png';
import _3 from 'src/assets/img/stories_avatars/_3.png';
import _4 from 'src/assets/img/stories_avatars/_4.png';
import _5 from 'src/assets/img/stories_avatars/_5.png';
import _6 from 'src/assets/img/stories_avatars/_6.png';

const Stories: FC = () => {
	return (
		<StoriesWrapper>
			<AddStoryWrapper>
				<AddCircleIcon />
			</AddStoryWrapper>
			<Story avatarUrl={_1} />
			<Story avatarUrl={_2} />
			<Story avatarUrl={_3} />
			<Story avatarUrl={_4} />
			<Story avatarUrl={_5} />
			<Story avatarUrl={_6} />
		</StoriesWrapper>
	);
};

export default Stories;
