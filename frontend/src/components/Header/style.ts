import { Avatar, Grid } from '@mui/material';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
	display: flex;
	justify-content: space-between;
`;

export const Logo = styled.h1`
	color: #fff;
	font-weight: 700;
	font-size: 20px;

	span {
		color: #2aa3ef;
	}
`;

export const SearchBarGridStyled = styled(Grid)`
	/* padding-right: 60px; */
`;

export const RightStyledGrid = styled(Grid)`
	display: flex;
	justify-content: space-between;
`;
export const UserShortcutWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const UsernameWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	span {
		&:first-child {
			font-weight: 700;
			font-size: 14px;
			color: #f1f1f1;
		}

		&:nth-child(2) {
			font-size: 14px;
			color: #f1f1f1;
		}
	}
`;

export const ConfigWrapper = styled.div`
	svg {
		fill: #fff;
	}
`;
