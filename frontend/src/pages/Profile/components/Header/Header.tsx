import ModeEditIcon from '@mui/icons-material/ModeEdit';
import React, { FC } from 'react';
import { EditProfile } from '../EditProfile';
import {
	CoverPhotoWrapper,
	EditBtn,
	ProfileHeader,
	ProfilePhotoWrapper
} from './style';

const Header: FC = () => (
	<ProfileHeader>
		<CoverPhotoWrapper>
			<img
				src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
				alt=""
			/>
		</CoverPhotoWrapper>
		<ProfilePhotoWrapper>
			<img
				src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
				alt=""
			/>
		</ProfilePhotoWrapper>
		<EditProfile />
	</ProfileHeader>
);

export default Header;
