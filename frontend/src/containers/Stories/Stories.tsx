import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Modal, SnackBar } from 'components/globals';
import React, { FC, useEffect, useState } from 'react';
import { socket } from 'src/config/socket';
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
	const [stories, setStories] = useState([]);

	const [snackBarProps, setSnackBarProps] = useState({
		isOpen: false,
		message: null,
		variant: null
	});

	const { data } = useGetAllStoriesQuery();

	useEffect(() => {
		setStories(data?.getStories);
	}, [data]);

	useEffect(() => {
		socket.on('addStory', (story) => {
			setStories([...stories, story.story]);
		});

		return () => {
			socket.off('addStory');
		};
	}, [stories]);

	return (
		<>
			<StoriesWrapper>
				<AddStoryWrapper onClick={handleOpen}>
					<AddCircleIcon />
				</AddStoryWrapper>
				{stories?.map((story: StoryType) => {
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
				<EditForm
					handleClose={handleClose}
					snackBarProps={snackBarProps}
					setSnackBarProps={setSnackBarProps}
				/>
			</Modal>

			<SnackBar
				snackBarProps={snackBarProps}
				setSnackBarProps={setSnackBarProps}
			/>
		</>
	);
};

export default Stories;
