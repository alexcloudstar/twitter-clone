import { ClickAwayListener, LinearProgress } from '@mui/material';
import { Modal } from 'components/globals';
import React, { FC, useEffect, useState } from 'react';
import { Story } from 'src/generated/graphql';
import { StyledStory, StyledStoryContainer } from './style';

type StoryProps = {
	story: Story['storyUrl'];
	username: Story['creatorUsername'];
	borderColor: string;
};

const Story: FC<StoryProps> = ({ story, borderColor, username }) => {
	const [open, setOpen] = useState(false);
	const [progress, setProgress] = useState(0);
	const [isActive, setIsActive] = useState(false);

	function toggle() {
		setIsActive(!isActive);
	}

	function reset() {
		setProgress(0);
		setIsActive(false);
	}

	const handleOpen = () => {
		setOpen(true);
		toggle();
	};

	const handleClose = () => {
		setOpen(false);
		reset();
	};

	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				setProgress((seconds) => seconds + 1);
			}, 100);
		} else if (!isActive && progress !== 0) clearInterval(interval);

		if (progress === 100) handleClose();

		return () => {
			clearInterval(interval);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isActive, progress]);

	return (
		<>
			<StyledStory borderColor={borderColor} onClick={handleOpen}>
				<img src={story} alt={`story-${username}`} />
			</StyledStory>
			<Modal open={open} onClose={handleClose}>
				<StyledStoryContainer>
					<LinearProgress variant="determinate" value={progress} />

					<img src={story} alt={`story-${username}`} />
				</StyledStoryContainer>
			</Modal>
		</>
	);
};

export default Story;
