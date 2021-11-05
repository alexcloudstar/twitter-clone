import styled from 'styled-components';

export const StoriesWrapper = styled.div`
	color: #fff;
	margin: 30px 0;
	display: flex;
	flex-direction: row;
	width: 80%;

	@media (min-width: 991px) and (max-width: 1199px) {
		width: 60%;
	}

	@media (min-width: 2559px) {
		width: 85%;
	}

	.slick-slider {
		width: -webkit-fill-available !important;
		margin-left: 20px;
	}
`;

export const AddStoryButton = styled.button`
	margin-right: 25px;
	background: #173244;
	padding: 13px 15px;
	border-radius: 50px;
	width: initial !important;

	svg {
		color: #2aa3ef;
		width: 20px;
		height: 20px;
	}
`;
