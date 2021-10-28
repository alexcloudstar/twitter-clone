import { Alert, Snackbar } from '@mui/material';
import React, { FC, useState } from 'react';
import { SnackBarWrapper } from './style';

type SnackBarProps = {
	snackBarProps: {
		isOpen: boolean;
		message: string | undefined;
		variant: 'success' | 'error' | 'info' | 'warning';
	};
	setSnackBarProps: React.Dispatch<
		React.SetStateAction<{
			isOpen: boolean;
			message: string | undefined;
			variant: 'success' | 'error' | 'info' | 'warning';
		}>
	>;
};

const SnackBar: FC<SnackBarProps> = ({ snackBarProps, setSnackBarProps }) => {
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setSnackBarProps({
			isOpen: false,
			message: null,
			variant: null
		});
	};

	return (
		<SnackBarWrapper>
			<Snackbar
				open={snackBarProps.isOpen}
				autoHideDuration={3000}
				onClose={handleClose}
			>
				<Alert severity={snackBarProps.variant} sx={{ width: '100%' }}>
					{snackBarProps.message}
				</Alert>
			</Snackbar>
		</SnackBarWrapper>
	);
};

export default SnackBar;
