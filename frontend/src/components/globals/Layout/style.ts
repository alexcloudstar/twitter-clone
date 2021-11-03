import { Grid } from '@mui/material';
import styled from 'styled-components';

export const StyledGridContainer = styled(Grid)`
	flex-direction: column !important;

	@media (min-width: 767px) {
		flex-direction: row !important;
	}
`;

export const StyledGrid = styled(Grid)`
	margin-top: 30px !important;
`;

export const RightSideWrapper = styled.div`
	color: #f1f1f1;
	border-radius: 30px;
	background-color: rgb(42 163 239 / 10%);

	display: flex;
	flex-direction: column;
	padding: 20px;
`;

export const Title = styled.h3`
	color: #2aa3ef;
	font-weight: 700;
	margin-bottom: 5px;
`;

export const UserComponent = styled.div`
	font-size: 14px;
	color: #f1f1f1;
	margin: 5px 0;
	display: flex;
	justify-content: space-between;
`;
