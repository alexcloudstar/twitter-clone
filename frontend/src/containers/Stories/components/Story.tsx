import { ClickAwayListener, LinearProgress } from '@mui/material';
import { StyledModal, StyledModalBox } from 'components/globals';
import { EditForm } from 'containers/Tweets/components/Tweet/components/EditForm';
import React, { FC, useState } from 'react';
import { Story } from 'src/generated/graphql';

import { StyledStory, StyledStoryContainer } from './style';

type StoryProps = {
	story: Story['storyUrl'];
	username: Story['creatorUsername'];
	borderColor: string;
};

const Story: FC<StoryProps> = ({ story, borderColor, username }) => {
	const [open, setOpen] = useState(true);
	const [progress, setProgress] = useState(0);

	const timer = setTimeout(() => {
		setProgress(progress + 1);
		if (progress === 100) handleClose();
	}, 100);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setProgress(0);
		clearTimeout(timer);
	};

	return (
		<>
			<StyledStory borderColor={borderColor} onClick={handleOpen}>
				<img src={story} alt={`story-${username}`} />
			</StyledStory>
			<StyledModal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<ClickAwayListener onClickAway={handleClose}>
					<StyledModalBox>
						<StyledStoryContainer>
							<LinearProgress variant="determinate" value={progress} />

							<img src={story} alt={`story-${username}`} />
						</StyledStoryContainer>
					</StyledModalBox>
				</ClickAwayListener>
			</StyledModal>
		</>
	);
};

export default Story;
