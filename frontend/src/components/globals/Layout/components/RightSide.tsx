import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { format } from 'date-fns';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useGetAllUsersQuery } from 'src/generated/graphql';
import { RightSideWrapper, StyledGrid, Title, UserComponent } from '../style';

const RightSide: FC = () => {
	const { data, loading } = useGetAllUsersQuery();

	if (loading) return <div>Loading...</div>;

	return (
		<StyledGrid item md={3}>
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
		</StyledGrid>
	);
};

export default RightSide;
