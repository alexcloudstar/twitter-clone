import styled from 'styled-components';

export const WelcomeWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const WelcomeLeft = styled.div`
	img {
		object-fit: cover;
	}

	@media (max-width: 767px) {
		display: none;
	}
`;

export const WelcomeRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ChangeFormText = styled.div`
	font-size: 24px;
	margin-top: 30px;
	color: #232323;
	cursor: pointer;
	text-transform: uppercase;
`;
