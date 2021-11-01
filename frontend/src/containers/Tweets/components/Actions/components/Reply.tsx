import React, { FC } from 'react';
import MessageIcon from '@mui/icons-material/Message';
import { ActionWrapper } from './style';

const Reply: FC<{ handleOpen: () => void }> = ({ handleOpen }) => (
	<ActionWrapper onClick={handleOpen}>
		<MessageIcon />
	</ActionWrapper>
);
export default Reply;
