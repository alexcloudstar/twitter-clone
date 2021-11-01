import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Modal } from 'components/globals';
import React, { FC, useState } from 'react';
import { User } from 'src/generated/graphql';
import { EditBtn } from '../Header/style';
import { EditForm } from './components';

const EditProfile: FC<Omit<User, 'updatedAt'>> = (userData) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<EditBtn onClick={handleOpen}>
				<ModeEditIcon />
			</EditBtn>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<EditForm {...userData} handleClose={handleClose} />
			</Modal>
		</>
	);
};

export default EditProfile;
