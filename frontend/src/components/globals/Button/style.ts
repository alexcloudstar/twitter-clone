import styled from 'styled-components';
import { ButtonProps } from './types';

export const StyledButton = styled.button<ButtonProps>`
	background-color: #1da1f2;
	border: 1px solid #657786;
	border-radius: 4px;
	padding: 10px 20px;
	margin-top: 1rem;
	transition: all 0.4s ease-in-out;
	color: #fff;
	border-radius: 50px;

	&:hover {
		background-color: #657786;
		border-color: #1da1f2;
	}

	&:disabled {
		opacity: 0.4;
	}
`;
