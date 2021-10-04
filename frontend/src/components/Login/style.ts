import styled from 'styled-components';

export const LoginWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const LoginForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const LoginHolder = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;

	label {
		font-size: 18px;
		font-weight: 400;
		margin-bottom: 10px;
	}

	input {
		border: 1px solid #1da1f2;
		border-radius: 7px;
		padding: 5px 10px;
	}
`;
