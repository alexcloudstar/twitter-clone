import React, { FC, useState } from 'react';
import { AddStoryWrapper, StoriesWrapper } from './style';
import { Story as StoryType } from 'src/generated/graphql';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Story from './components/Story';
import _1 from 'src/assets/img/stories_avatars/_1.png';
import _2 from 'src/assets/img/stories_avatars/_2.png';
import _3 from 'src/assets/img/stories_avatars/_3.png';
import _4 from 'src/assets/img/stories_avatars/_4.png';
import _5 from 'src/assets/img/stories_avatars/_5.png';
import _6 from 'src/assets/img/stories_avatars/_6.png';
import { ClickAwayListener } from '@mui/material';
import { CreateTweet } from 'components/CreateTweet';
import { StyledModal, StyledModalBox } from 'components/globals';
import { EditForm } from './components/EditForm';
import { useGetAllStoriesQuery } from 'src/generated/graphql';
import { randomColor } from 'utils/randomHexColor';

const Stories: FC = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const { data, loading } = useGetAllStoriesQuery();

	if (loading) return <div>Loading...</div>;

	return (
		<>
			<StoriesWrapper>
				<AddStoryWrapper onClick={handleOpen}>
					<AddCircleIcon />
				</AddStoryWrapper>
				{data.getStories.map((story: StoryType) => {
					const borderColor = randomColor();
					return (
						<Story
							key={story.id}
							story={story.storyUrl}
							username={story.creatorUsername}
							borderColor={borderColor}
						/>
					);
				})}

				{/* <Story story={_2} />
				<Story story={_3} />
				<Story story={_4} />
				<Story story={_5} />
				<Story story={_6} /> */}
			</StoriesWrapper>

			<StyledModal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<ClickAwayListener onClickAway={handleClose}>
					<StyledModalBox>
						<EditForm handleClose={handleClose} />
					</StyledModalBox>
				</ClickAwayListener>
			</StyledModal>
		</>
	);
};

export default Stories;
