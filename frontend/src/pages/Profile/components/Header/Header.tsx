import { UserAvatar } from 'components/globals';
import React, { FC } from 'react';
import { getNameInitial } from 'utils/getNameInitial';
import { UserDataProps } from '../../types';
import { EditProfile } from '../EditProfile';
import { CoverPhotoWrapper, ProfileHeader, ProfilePhotoWrapper } from './style';

const Header: FC<UserDataProps> = (userData) => (
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
			{userData.avatarUrl !== 'null' ||
				(!userData.avatarUrl && (
					<UserAvatar
						src={userData.avatarUrl}
						alt={`profile-photo-${userData.avatarUrl}`}
					>
						{getNameInitial(userData.name)}
					</UserAvatar>
				))}
		</ProfilePhotoWrapper>
		<EditProfile {...userData} />
	</ProfileHeader>
);

export default Header;
