import React, { FC } from 'react';

import CakeIcon from '@mui/icons-material/Cake';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import { ProfileBody, UserInfoFields } from './style';
import { User } from 'src/generated/graphql';
import { format } from 'date-fns';

type BodyProps = {
	joined?: string;
} & Omit<User, 'updatedAt'>;

const Body: FC<BodyProps> = ({
	username,
	location,
	avatarUrl,
	bio,
	birthday,
	coverPhotoUrl,
	email,
	id,
	name,
	website,
	joined
}) => (
	<ProfileBody>
		<h2>{username}</h2>
		<h3>@{username}</h3>

		<UserInfoFields>
			{location && (
				<span>
					<LocationOnIcon />
					{location}
				</span>
			)}
			<span>
				<LocationOnIcon />
				Romania
			</span>

			{website && (
				<span>
					<a
						href={`https://${website}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<PhonelinkIcon />
						{website}
					</a>
				</span>
			)}
			<span>
				<a
					href="https://alexcloudstar.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<PhonelinkIcon />
					www.alexcloudstar.com
				</a>
			</span>
			{birthday && (
				<span>
					<CakeIcon />
					Born {format(new Date(birthday), 'LLLL, dd, yyyy')}
				</span>
			)}
			{joined && (
				<span>
					<EventNoteIcon />
					Joined {joined}
				</span>
			)}
		</UserInfoFields>
	</ProfileBody>
);

export default Body;
