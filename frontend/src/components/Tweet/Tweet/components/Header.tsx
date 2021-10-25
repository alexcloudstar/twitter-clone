import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
	CreatedAtWrapper,
	HeaderWrapper,
	UserAvatarWrapper,
	UsernameWrapper
} from '../style';
import { HeaderProps } from '../types';

const Header: FC<HeaderProps> = ({ createdAt, creatorUsername, tweet }) => (
	<HeaderWrapper>
		<UserAvatarWrapper />
		<h5>
			<Link to={`/profile/${creatorUsername}`}>
				<UsernameWrapper>@{creatorUsername}</UsernameWrapper>
				<CreatedAtWrapper>{createdAt}</CreatedAtWrapper>
			</Link>
		</h5>
	</HeaderWrapper>
);

export default Header;
