import styled from 'styled-components';

export const ProfilePhotoWrapper = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 100px;
	background-image: linear-gradient(
		to top,
		#c53d3d,
		#cb477f,
		#b167b8,
		#7b87da,
		#35a0e0,
		#00b2e0,
		#00c1d5,
		#0acec1,
		#45deaf,
		#7cec95,
		#b5f678,
		#f2fb5f
	);
	margin-right: 25px;

	img {
		width: 100%;
		height: 100%;
		border-radius: inherit;
		object-fit: cover;
	}
`;
