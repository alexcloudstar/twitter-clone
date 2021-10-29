import styled from 'styled-components';

export const ProfileHeader = styled.div`
	position: relative;
	margin-bottom: 70px;
`;

export const CoverPhotoWrapper = styled.div`
	height: 200px;
	background-image: linear-gradient(
		to right bottom,
		#d16ba5,
		#c777b9,
		#ba83ca,
		#aa8fd8,
		#9a9ae1,
		#8aa7ec,
		#79b3f4,
		#69bff8,
		#52cffe,
		#41dfff,
		#46eefa,
		#5ffbf1
	);
	margin: 0 auto;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 30px;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: inherit;
	}
`;

export const ProfilePhotoWrapper = styled.div`
	position: absolute;
	top: calc(100% - 50px);
	left: 50px;
	width: 100px;
	height: 100px;
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
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

	img {
		width: 100%;
		height: 100%;
		border-radius: inherit;
		object-fit: cover;
	}
`;

export const EditBtn = styled.button`
	background: #173244;
	padding: 10px;
	border-radius: 50px;
	position: absolute;
	top: calc(100% - 20px);
	right: 30px;

	svg {
		color: #2aa3ef;
	}
`;
