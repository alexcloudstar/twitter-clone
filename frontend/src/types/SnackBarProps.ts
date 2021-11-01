type SnackBarProps = {
	snackBarProps: {
		isOpen: boolean;
		message: string;
		variant: 'success' | 'error' | 'info' | 'warning';
	};
	setSnackBarProps: React.Dispatch<
		React.SetStateAction<{
			isOpen: boolean;
			message: string;
			variant: 'success' | 'error' | 'info' | 'warning' | 'danger';
		}>
	>;
};

export default SnackBarProps;
