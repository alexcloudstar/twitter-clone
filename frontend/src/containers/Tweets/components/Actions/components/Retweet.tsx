import React, { FC } from 'react';
import MessageIcon from '@mui/icons-material/Message';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { ActionWrapper } from './style';
import { Tooltip } from '@mui/material';

const Retweet: FC = () => (
	<Tooltip title="Retweet" placement="bottom">
		<ActionWrapper>
			<ImportExportIcon />
		</ActionWrapper>
	</Tooltip>
);

export default Retweet;
