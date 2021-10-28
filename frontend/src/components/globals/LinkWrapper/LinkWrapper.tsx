import React, { FC } from 'react';
import { StyledLinkWrapper } from './style';

const LinkWrapper: FC = ({ children }) => (
	<StyledLinkWrapper>{children}</StyledLinkWrapper>
);

export default LinkWrapper;
