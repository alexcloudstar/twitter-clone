import { Modal } from '@mui/material';
import { Box } from '@mui/material';
import styled from 'styled-components';

export const StyledModal = styled(Modal)``;

export const StyledModalBox = styled(Box)`
	width: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: auto;
`;
