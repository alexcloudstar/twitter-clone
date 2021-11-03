import { Grid, Hidden } from '@mui/material';
import React, { FC } from 'react';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import { StyledGridContainer } from './style';

const Layout: FC = ({ children }) => {
	return (
		<StyledGridContainer container spacing={3} justifyContent="center">
			<LeftSide />
			{children}
			<Hidden smDown>
				<RightSide />
			</Hidden>
		</StyledGridContainer>
	);
};

export default Layout;
