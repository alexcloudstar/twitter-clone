import { Grid } from '@mui/material';
import React, { FC } from 'react';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

const Layout: FC = ({ children }) => {
	return (
		<Grid container spacing={3} justifyContent="center">
			<LeftSide />
			{children}
			<RightSide />
		</Grid>
	);
};

export default Layout;
