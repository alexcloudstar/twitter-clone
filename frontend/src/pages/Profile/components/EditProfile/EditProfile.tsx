import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { ClickAwayListener } from '@mui/material';
import { StyledModal, StyledModalBox } from 'components/globals';
import React, { FC, useState } from 'react';
import { EditBtn } from '../Header/style';

const EditProfile: FC = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<EditBtn onClick={handleOpen}>
				<ModeEditIcon />
			</EditBtn>
			<StyledModal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<ClickAwayListener onClickAway={handleClose}>
					<StyledModalBox>
						<div>312</div>
					</StyledModalBox>
				</ClickAwayListener>
			</StyledModal>
		</>
	);
};

export default EditProfile;