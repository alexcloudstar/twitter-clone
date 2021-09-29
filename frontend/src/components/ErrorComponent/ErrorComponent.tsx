import React, { FC } from 'react';
import { ErrorProps } from './types';

const ErrorComponent: FC<ErrorProps> = ({ errorMsg }) =>
	errorMsg && (
		<div>
			<p>Error: {errorMsg}</p>
		</div>
	);

export default ErrorComponent;
