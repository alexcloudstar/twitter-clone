import React, { FC } from 'react';

import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { ActionWrapper } from './style';
import { Tooltip } from '@mui/material';

const Save: FC = () => (
	<Tooltip title="Save" placement="bottom">
		<ActionWrapper>
			<TurnedInNotIcon />
		</ActionWrapper>
	</Tooltip>
);

export default Save;
