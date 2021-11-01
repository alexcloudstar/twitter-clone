import { Alert, Snackbar } from '@mui/material';
import React, { FC } from 'react';
import { SnackBarProps } from 'src/types';
import { SnackBarWrapper } from './style';

const SnackBar: FC<SnackBarProps> = ({ snackBarProps, setSnackBarProps }) => {
	const handleClose = (_, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setSnackBarProps({
			isOpen: false,
			message: '',
			variant: 'success'
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
