import React, { FC } from 'react';
import {
	Avatar,
	ConfigWrapper,
	HeaderWrapper,
	Logo,
	SearchBar,
	UsernameWrapper,
	UserShortcutWrapper
} from './style';

const Header: FC = () => {
	return (
		<HeaderWrapper>
			<Logo>
				Twit<span>Gram.</span>
			</Logo>
			<SearchBar />
			<UserShortcutWrapper>
				<Avatar></Avatar>
				<UsernameWrapper>
					<span>Alex Cloudstar</span>
					<span>@alexcloudstar</span>
				</UsernameWrapper>
				<ConfigWrapper>
					<span>cog</span>
				</ConfigWrapper>
			</UserShortcutWrapper>
		</HeaderWrapper>
	);
};

export default Header;
