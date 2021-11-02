import { Box, Tabs } from '@mui/material';
import styled from 'styled-components';

export const StyledTabs = styled(Tabs)`
	margin-top: 30px;

	div {
		justify-content: space-between !important;
	}

	button {
		color: #f1f1f1 !important;
	}
`;

export const StyledTabsContent = styled(Box)`
	box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 25%);
	margin: 20px 0;
	padding: 5px 3px;
	border-radius: 3px;
	font-weight: 500;
	transition: 0.5s all ease;

	&:hover {
		box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 50%);
	}

	div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		padding: 0 10px;
		color: #f1f1f1;

		button {
			text-transform: uppercase;
		}
	}
`;
