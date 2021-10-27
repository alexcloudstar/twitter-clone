import styled from 'styled-components';
import Button from '@mui/material/Button';

export const HomeWrapper = styled.div``;

export const LinkWrapper = styled.aside`
	display: flex;
	flex-direction: column;

	a {
		margin-top: 20px;
		color: #f1f1f1;
		font-weight: 700;
		font-size: 16px;

		svg {
			margin-right: 10px;
		}

		&.active {
			color: #2aa3ef;
		}
	}
`;

export const StyledButton = styled(Button)`
	width: 50%;
	border-radius: 50px !important;
	margin-top: 40px !important;
	font-weight: 700 !important;
	font-size: 14px !important;
	text-transform: capitalize !important;
	color: #f1f1f1;
	background: #2aa3ef;
`;
