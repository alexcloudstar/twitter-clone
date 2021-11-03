import { InputAdornment, TextField } from '@mui/material';
import styled from 'styled-components';

export const SearchbarWrapper = styled.div``;

export const StyledTextField = styled(TextField)`
	background-color: rgb(42 163 239 / 10%);
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	border-bottom: 1px solid rgb(42 163 239 / 10%) !important;
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

export const SearchResultsWrapper = styled.div`
	background-color: rgb(42 163 239 / 10%);
	box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 25%);
	width: 100%;
	padding: 5px 10px;
	border-bottom-left-radius: 10px;

	a {
		width: 100%;
		max-width: 100%;
		display: flex;
		color: #fff;
		padding: 5px 0;

		&:not(:last-child) {
			border-bottom: 1px solid #fff;
		}
	}
`;

export const StyledInputAdornment = styled(InputAdornment)`
	cursor: pointer;
`;
