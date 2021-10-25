import styled from 'styled-components';

export const TweetWrapper = styled.div<{ tweetId: number }>`
	padding-bottom: 10px;
	width: ${({ tweetId }) => !tweetId && '50%'};
	margin: ${({ tweetId }) => !tweetId && '3rem auto'};

	h5 {
		display: flex;
		color: #2e2e2e;
		padding-bottom: 10px;
		margin: 10px 0 25px;

		a {
			margin-left: 3px;
		}
	}

	button {
		margin-top: 15px;
	}
`;

export const UsernameWrapper = styled.span`
	color: #3e3e3e;
`;

export const CreatedAtWrapper = styled.span`
	color: red;
`;
