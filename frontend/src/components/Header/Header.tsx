import { Grid } from '@mui/material';
import { Searchbar } from 'components/Searchbar';
import React, { FC } from 'react';
import {
	StyledAvatar,
	ConfigWrapper,
	HeaderWrapper,
	Logo,
	UsernameWrapper,
	UserShortcutWrapper,
	RightStyledGrid,
	SearchBarGridStyled
} from './style';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const Header: FC = () => {
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
						<StyledAvatar>A</StyledAvatar>
						<UsernameWrapper>
							<span>Alex Cloudstar</span>
							<span>@alexcloudstar</span>
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
