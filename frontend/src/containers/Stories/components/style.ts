import styled from 'styled-components';
import { randomColor } from 'utils/randomHexColor';

export const StyledStory = styled.button<{ borderColor: string }>`
	width: 50px;
	height: 50px;
	margin-right: 25px;
	border-radius: 50px;
	border: 2px solid ${({ borderColor }) => borderColor};

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: inherit;
	}
`;

export const StyledStoryContainer = styled.div`
	width: 400px;
	height: 600px;
	margin: 0 auto;

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;
