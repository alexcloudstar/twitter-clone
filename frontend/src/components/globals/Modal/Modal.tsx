import { ClickAwayListener } from '@mui/material';
import React, { FC } from 'react';
import { StyledModal, StyledModalBox } from './style';

type ModalProps = {
	open: boolean;
	onClose: () => void;
};

const Modal: FC<ModalProps> = ({ open, onClose, children }) => (
	<StyledModal
		open={open}
		onClose={onClose}
		aria-labelledby="modal-modal-title"
		aria-describedby="modal-modal-description"
	>
		<ClickAwayListener onClickAway={onClose}>
			<StyledModalBox>{children}</StyledModalBox>
		</ClickAwayListener>
	</StyledModal>
);

export default Modal;
