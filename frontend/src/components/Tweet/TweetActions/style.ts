import styled from 'styled-components';

export const TweetActionsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border-bottom: 1px solid #ccc;
	padding-bottom: 10px;

	div {
		padding: 0 5px;
		&:hover {
			cursor: pointer;
		}
	}
`;

export const TweetActionReplyWrapper = styled.div``;

export const TweetActionUpVoteWrapper = styled.div``;

export const TweetActionDeleteWrapper = styled.div``;
