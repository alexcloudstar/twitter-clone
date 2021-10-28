import styled from 'styled-components';

export const TweetWrapper = styled.div<{ tweetId: number }>`
	margin-top: 30px;
	width: ${({ tweetId }) => !tweetId && '50%'};
	margin: ${({ tweetId }) => !tweetId && '3rem auto'};

	h5 {
		display: flex;
		color: #2e2e2e;

		a {
			margin-left: 3px;
		}
	}

	button {
		margin-top: 0;
	}
`;

export const HeaderWrapper = styled.div``;

export const UsernameWrapper = styled.span`
	color: #797979;
`;

export const CreatedAtWrapper = styled.span`
	margin-left: 10px;
	color: #797979;
	position: relative;

	&:before {
		content: '';
		position: absolute;
		top: 50%;
		background: #797979;
		width: 5px;
		height: 5px;
		transform: translateY(-50%);
		left: -7px;
		border-radius: 50%;
	}
`;

export const TweetContentWrapper = styled.div`
	margin-bottom: 10px;
`;

export const UserAvatarWrapper = styled.div`
	background: red;
	width: 30px;
	height: 30px;
	border-radius: 50px;
`;
