import { AccountCircle, Search } from '@mui/icons-material';
import { TextField, InputAdornment } from '@mui/material';
import React, { FC } from 'react';
import { SearchbarWrapper, StyledTextField } from './style';

const Searchbar: FC = () => {
	const [value, setValue] = React.useState('');

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<SearchbarWrapper>
			<StyledTextField
				id="input-with-icon-textfield"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Search />
						</InputAdornment>
					)
				}}
				value={value}
				placeholder="Search"
				variant="standard"
				onChange={onChange}
			/>
		</SearchbarWrapper>
	);
};

export default Searchbar;
