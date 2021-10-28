import styled from 'styled-components';

export const ProfileBody = styled.div`
	font-size: 16px;
	color: #f1f1f1;

	h3 {
		color: #a9a9a9;
		font-weight: 400;
	}
`;

export const UserInfo = styled.div`
	margin-top: 50px;
`;

export const UserInfoFields = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: 10px;

	span {
		margin-right: 10px;

		font-size: 14px;
		font-weight: 400;
		color: #f1f1f1;
	}

	svg {
		margin-right: 5px;
	}
`;
