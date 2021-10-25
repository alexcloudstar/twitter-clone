import React, { FC } from 'react';
import { StyledButton } from './style';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ children, type, props }) => (
	<StyledButton type={type} {...props}>
		{children}
	</StyledButton>
);

export default Button;
