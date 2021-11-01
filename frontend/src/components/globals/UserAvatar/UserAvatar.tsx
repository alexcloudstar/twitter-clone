import React, { FC } from 'react';
import { ProfilePhotoWrapper } from './style';

export type UserAvatarProps = {
	avatar: string;
	position: 'initial' | 'absolute' | 'relative' | 'inherit';
};

const UserAvatar: FC<UserAvatarProps> = ({ avatar, position }) => (
	<ProfilePhotoWrapper position={position}>
		{avatar !== 'null' && avatar !== '' && (
			<img src={avatar} alt={`profile-photo-${avatar}`} />
		)}
	</ProfilePhotoWrapper>
);

export default UserAvatar;
