import React, { FC } from 'react';
import { ProfilePhotoWrapper } from './style';

type UserAvatarProps = {
	avatar: string;
};

const UserAvatar: FC<UserAvatarProps> = ({ avatar }) => (
	<ProfilePhotoWrapper>
		{avatar !== 'null' && avatar !== '' && (
			<img src={avatar} alt={`profile-photo-${avatar}`} />
		)}
	</ProfilePhotoWrapper>
);

export default UserAvatar;
