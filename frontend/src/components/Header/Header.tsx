import { Grid } from '@mui/material';
import { Searchbar } from 'components/Searchbar';
import React, { FC } from 'react';
import {
	ConfigWrapper,
	HeaderWrapper,
	Logo,
	UsernameWrapper,
	UserShortcutWrapper,
	RightStyledGrid,
	SearchBarGridStyled
} from './style';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useLocation } from 'react-router-dom';
import { useMeQuery } from 'src/generated/graphql';
import { UserAvatar } from 'components/globals';

const Header: FC = () => {
	const { data, loading } = useMeQuery();

	if (loading) return <div>Loading...</div>;

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
				</RightStyledGrid>
			</Grid>
		</HeaderWrapper>
	);
};

export default Header;
