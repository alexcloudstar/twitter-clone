import { TextField } from '@mui/material';
import styled from 'styled-components';

export const EditFormWrapper = styled.form`
	background-color: #fff;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	text-align: center;
	padding: 30px 50px;

	button {
		margin: 0 auto;
	}
`;

export const StyledTextField = styled(TextField)`
	margin: 10px 0 !important;
`;
