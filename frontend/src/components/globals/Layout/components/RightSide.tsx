import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { useGetAllUsersQuery } from 'src/generated/graphql';
import { RightSideWrapper, Title, UserComponent } from '../style';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const RightSide: FC = () => {
	const { data, loading } = useGetAllUsersQuery();

	if (loading) return <div>Loading...</div>;

	return (
		<Grid item md={3}>
			<RightSideWrapper>
				<Title>
					Registered Users <PeopleAltIcon />
				</Title>
				{data.getAllUsers.users.map(({ id, username, createdAt }, index) => (
					<Link to={`/profile/${id}`} key={id}>
						<UserComponent>
							<span>
								{index + 1}. {username}
							</span>
							<span>{format(new Date(+createdAt), 'LLLL, dd, yyyy')}</span>
						</UserComponent>
					</Link>
				))}
			</RightSideWrapper>
		</Grid>
	);
};

export default RightSide;
