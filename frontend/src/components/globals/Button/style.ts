import Button, { ButtonProps } from '@mui/material/Button';
import styled from 'styled-components';

export const StyledButton = styled(Button)<ButtonProps>`
	width: 50%;
	border-radius: 50px !important;
	margin-top: 40px !important;
	font-weight: 700 !important;
	font-size: 14px !important;
	text-transform: capitalize !important;
	color: #f1f1f1 !important;
	background: #2aa3ef !important;
`;
