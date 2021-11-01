import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';
import { isMe } from 'utils/isMe';
import { UserDataProps } from '../../types';
import { EditProfile } from '../EditProfile';
import { CoverPhotoWrapper, ProfileHeader, ProfilePhotoWrapper } from './style';

const Header: FC<UserDataProps> = (userData) => {
	const match: { params: { username: string } } = useRouteMatch();

	return (
		<ProfileHeader>
			<CoverPhotoWrapper>
				{userData.coverPhotoUrl !== 'null' && userData.coverPhotoUrl !== '' && (
					<img
						src={userData.coverPhotoUrl}
						alt={`cover-photo-${userData.username}`}
					/>
				)}
			</CoverPhotoWrapper>
			<ProfilePhotoWrapper>
				{userData.avatarUrl !== 'null' && userData.avatarUrl !== '' && (
					<img
						src={userData.avatarUrl}
						alt={`profile-photo-${userData.avatarUrl}`}
					/>
				)}
			</ProfilePhotoWrapper>
			{isMe(userData.username, match.params.username) && (
				<EditProfile {...userData} />
			)}
		</ProfileHeader>
	);
};

export default Header;
