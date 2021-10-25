import styled from 'styled-components';

export const CreateTweetWrapper = styled.div``;

export const CreateTweetForm = styled.form`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	position: relative;

	textarea {
		width: 100%;
		resize: none;
		height: 70px;
		padding: 10px;
		display: block;
		border-radius: 10px;
		border: 1px solid #1da1f2;

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
