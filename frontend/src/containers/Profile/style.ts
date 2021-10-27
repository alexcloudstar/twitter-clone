import styled from 'styled-components';

export const ProfileWrapper = styled.header`
	position: relative;
`;

export const CoverPhotoWrapper = styled.div`
	width: 600px;
	height: 200px;
	background: #585858;
	margin: 0 auto;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const ProfilePhotoWrapper = styled.div`
	position: absolute;
	top: 180px;
	left: 200px;

	img {
		width: 100px;
		height: 100px;
		border-radius: 100px;
		object-fit: cover;
	}
`;

export const TestComp = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	width: 60%;
	margin: 0 auto;

	button {
		margin-top: 0;
		height: max-content;
	}
`;

export const UserInfo = styled.div`
	margin-top: 50px;
`;

export const UserInfoFields = styled.div`
	display: flex;
	flex-direction: row;
	width: 70%;
	margin: 0 auto;

	span {
		margin-left: 10px;
	}
`;
