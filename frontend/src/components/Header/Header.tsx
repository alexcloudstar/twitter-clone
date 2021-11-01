import SettingsIcon from '@mui/icons-material/Settings';
import { Grid } from '@mui/material';
import { UserAvatar } from 'components/globals';
import { Searchbar } from 'components/Searchbar';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useMeQuery } from 'src/generated/graphql';
import { getNameInitial } from 'utils/getNameInitial';
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
	const { data, loading } = useMeQuery();

	if (loading) return <div>Loading...</div>;

	return (
		<HeaderWrapper>
			<Grid container spacing={3} justifyContent="center">
				<Grid item md={2}>
					<Link to="/home">
						<Logo>
							Twit<span>Gram.</span>
						</Logo>
					</Link>
				</Grid>
				<SearchBarGridStyled item md={4}>
					<Searchbar />
				</SearchBarGridStyled>
				<RightStyledGrid item md={3}>
					<UserShortcutWrapper>
						<UserAvatar>{getNameInitial(data?.me?.name)}</UserAvatar>
						<UsernameWrapper>
							{data?.me?.name !== 'null' && <span>{data?.me?.name}</span>}
							<span>@{data.me.username}</span>
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
