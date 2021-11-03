import { Modal } from '@mui/material';
import { Box } from '@mui/material';
import styled from 'styled-components';

type StyledModalBoxProps = {
	maxWidth?:
		| 'fit-content'
		| 'inherit'
		| 'min-content'
		| 'max-content'
		| 'none'
		| 'initial'
		| 'unset'
		| 'auto'
		| string;
};

export const StyledModal = styled(Modal)``;

export const StyledModalBox = styled(Box)<StyledModalBoxProps>`
	width: 100%;
	max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}` : '100%')};
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: auto;

	@media (min-width: 767px) {
		width: 50%;
	}
`;
