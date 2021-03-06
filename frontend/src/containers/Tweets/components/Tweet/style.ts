import { Grid } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled.div<{ isReply?: boolean }>`
	padding: 20px;
	color: #f1f1f1;
	border-radius: 30px;
	background-color: ${({ isReply }) =>
		isReply ? 'rgb(42 163 239 / 15%)' : 'rgb(42 163 239 / 10%)'};
	margin-bottom: 30px;
	margin-top: 30px;
`;

export const Header = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 30px;
`;

export const UserWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;

	h3 {
		color: #f1f1f1;
		margin-left: 20px;
	}
`;

export const StyledGridTweetBody = styled(Grid)`
	width: 70% !important;

	@media (max-width: 767px) {
		width: initial;
	}
`;

export const Body = styled.div`
	margin-bottom: 30px;

	img {
		margin-top: 20px;
		border-radius: 30px;
	}
`;
export const ActionsWrapper = styled.div``;
