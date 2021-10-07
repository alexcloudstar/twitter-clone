import React, { FC } from 'react';
import { StyledButton } from './style';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ children, type }) => (
	<StyledButton type={type}>{children}</StyledButton>
);

export default Button;
