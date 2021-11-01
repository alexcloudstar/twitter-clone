import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Modal } from 'components/globals';
import React, { FC, useState } from 'react';
import {
	Story as StoryType,
	useGetAllStoriesQuery
} from 'src/generated/graphql';
import { randomColor } from 'utils/randomHexColor';
import { EditForm } from './components/EditForm';
import Story from './components/Story';
import { AddStoryWrapper, StoriesWrapper } from './style';

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
			</StoriesWrapper>

			<Modal open={open} onClose={handleClose}>
				<EditForm handleClose={handleClose} />
			</Modal>
		</>
	);
};

export default Stories;
