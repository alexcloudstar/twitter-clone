import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Theme {
		background: {
			main: string;
		};
	}

	interface ThemeOptions {
		background: {
			main: string;
		};
	}
}

export const defaultTheme = createTheme({
	background: {
		main: 'linear-gradient(#15202B, #255878) no-repeat center center fixed'
	}
});
