import styled from 'styled-components';

export const ReplyTweetWrapper = styled.div`
	width: 100%;
	margin-top: 30px;
`;

export const ReplyTweetForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	position: relative;
	align-items: center;
	border-bottom: 1px solid #ccc;
	margin-bottom: 50px;

	textarea {
		width: 100%;
		resize: none;
		height: 70px;
		padding: 10px;
		display: block;
		border-radius: 10px;
		padding-top: 20px;

		&:focus {
			border-color: #1da1f2;
			outline: none;
		}
	}
`;

export const CharacterCount = styled.div`
	bottom: 50%;
	right: 15px;
	position: absolute;
`;
