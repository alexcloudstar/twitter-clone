import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { format } from 'date-fns';
import React, { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useGetAllUsersQuery } from 'src/generated/graphql';
import { RightSideWrapper, StyledGrid, Title, UserComponent } from '../style';

const RightSide: FC = () => {
	const { data, loading } = useGetAllUsersQuery();

	if (loading) return <div>Loading...</div>;

	const users = [...data.getAllUsers.users].sort((a, b) =>
		a.createdAt > b.createdAt ? 1 : -1
	);

	return (
		<StyledGrid item md={3}>
			<RightSideWrapper>
				<Title>
					Registered Users <PeopleAltIcon />
				</Title>
				{!users && <h5>No Registered Users</h5>}
				{users.map(({ id, name, username, createdAt }, index) => (
					<Fragment key={id}>
						<Link to={`/profile/${username}`} key={id}>
							<UserComponent>
								<span>
									{index + 1}. {name !== 'null' ? name : username}
								</span>
								<span>{format(new Date(+createdAt), 'LLLL, dd, yyyy')}</span>
							</UserComponent>
						</Link>
					</Fragment>
				))}
			</RightSideWrapper>
		</StyledGrid>
	);
};

export default RightSide;
