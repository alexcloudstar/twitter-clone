import { Search } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import React, { FC, useState } from 'react';
import { useGlobalSearchQuery } from 'src/generated/graphql';
import SearchResults from './components/SearchResults';
import {
	SearchbarWrapper,
	StyledInputAdornment,
	StyledTextField
} from './style';
import CancelIcon from '@mui/icons-material/Cancel';

const Searchbar: FC = () => {
	const [value, setValue] = useState<string>('');

	const { data } = useGlobalSearchQuery({
		variables: { searchTerm: value }
	});

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const clearValue = () => {
		setValue('');
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
					),
					endAdornment: (
						<StyledInputAdornment position="end" onClick={clearValue}>
							<CancelIcon />
						</StyledInputAdornment>
					)
				}}
				value={value}
				placeholder="Search"
				variant="standard"
				onChange={onChange}
			/>

			{data && data.search && (
				<SearchResults results={data.search} clearValue={clearValue} />
			)}
		</SearchbarWrapper>
	);
};

export default Searchbar;
