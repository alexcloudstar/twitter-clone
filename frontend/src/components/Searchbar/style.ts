import { TextField } from '@mui/material';
import styled from 'styled-components';

export const SearchbarWrapper = styled.div``;

export const StyledTextField = styled(TextField)`
	background-color: rgb(42 163 239 / 10%);
	border-radius: 50px;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	width: 100%;

	div {
		padding: 0 5px !important;
		&:before,
		&:after {
			content: none;
		}
	}

	svg {
		fill: #fff;
	}

	input {
		color: #fff;
		padding: 10px 5px;
		font-weight: 700;
		font-size: 14px;

		&::placeholder {
			opacity: 1;
		}
	}
`;
