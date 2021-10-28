import { ButtonProps } from '@mui/material';
import React, { FC } from 'react';
import { StyledButton } from './style';

const Button: FC<ButtonProps> = ({ children }, props) => (
	<StyledButton {...props}>{children}</StyledButton>
);

export default Button;
