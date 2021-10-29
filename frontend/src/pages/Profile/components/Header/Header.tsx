import React, { FC } from 'react';
import { UserDataProps } from '../../types';
import { EditProfile } from '../EditProfile';
import { CoverPhotoWrapper, ProfileHeader, ProfilePhotoWrapper } from './style';

const Header: FC<UserDataProps> = (userData) => (
	<ProfileHeader>
		<CoverPhotoWrapper>
			{userData.coverPhotoUrl !== 'null' && (
				<img
					src={userData.coverPhotoUrl}
					alt={`cover-photo-${userData.username}`}
				/>
			)}
		</CoverPhotoWrapper>
		<ProfilePhotoWrapper>
			{userData.avatarUrl !== 'null' && (
				<img
					src={userData.avatarUrl}
					alt={`profile-photo-${userData.avatarUrl}`}
				/>
			)}
		</ProfilePhotoWrapper>
		<EditProfile {...userData} />
	</ProfileHeader>
);

export default Header;
