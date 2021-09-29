import React, { FC } from 'react';
import { ErrorWrapper } from './style';
import { ErrorProps } from './types';

const ErrorComponent: FC<ErrorProps> = ({ errorMsg }) =>
	errorMsg && (
		<ErrorWrapper>
			<p>Error: {errorMsg}</p>
		</ErrorWrapper>
	);

export default ErrorComponent;
