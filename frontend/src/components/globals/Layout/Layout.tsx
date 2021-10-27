import { Grid } from '@mui/material';
import React, { FC } from 'react';

const Layout: FC = ({ children }) => {
	return (
		<Grid container spacing={3} justifyContent="center">
			{children}
		</Grid>
	);
};

export default Layout;
