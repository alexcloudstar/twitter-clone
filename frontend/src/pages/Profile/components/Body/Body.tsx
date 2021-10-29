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
	bio,
	birthday,
	name,
	website,
	joined
}) => (
	<ProfileBody>
		{name !== 'null' && <h2>{name}</h2>}
		<h3>@{username}</h3>

		{bio !== 'null' && <span>{bio}</span>}

		<UserInfoFields>
			{location !== 'null' && (
				<span>
					<LocationOnIcon />
					{location}
				</span>
			)}

			{website !== 'null' && (
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
