import SettingsIcon from '@mui/icons-material/Settings';
import { Grid } from '@mui/material';
import { UserAvatar } from 'components/globals';
import { Searchbar } from 'components/Searchbar';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useMeQuery } from 'src/generated/graphql';
import {
	ConfigWrapper,
	HeaderWrapper,
	Logo,
	RightStyledGrid,
	SearchBarGridStyled,
	UsernameWrapper,
	UserShortcutWrapper
} from './style';

const Header: FC = () => {
	const { data } = useMeQuery();

	return (
		<HeaderWrapper>
			<Grid container spacing={3} justifyContent="center">
				<Grid item sm={12} md={2}>
					<Link to="/home">
						<Logo>
							Twit<span>Gram.</span>
						</Logo>
					</Link>
				</Grid>
				<SearchBarGridStyled item sm={12} md={4}>
					<Searchbar />
				</SearchBarGridStyled>
				<RightStyledGrid item sm={12} md={3}>
					<Link to={`/profile/${data?.me?.username}`}>
						<UserShortcutWrapper>
							<UserAvatar avatar={data?.me?.avatarUrl} />
							<UsernameWrapper>
								{data?.me?.name !== 'null' && <span>{data?.me?.name}</span>}
								<span>@{data?.me?.username}</span>
							</UsernameWrapper>
						</UserShortcutWrapper>
						<ConfigWrapper>
							<SettingsIcon />
						</ConfigWrapper>
					</Link>
				</RightStyledGrid>
			</Grid>
		</HeaderWrapper>
	);
};

export default Header;
