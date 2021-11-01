import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { format } from 'date-fns';
import React, { FC, Fragment } from 'react';
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
				{data.getAllUsers.users.map(
					({ id, name, username, createdAt }, index) => (
						<Fragment key={id}>
							{name !== 'null' ? (
								<Link to={`/profile/${username}`} key={id}>
									<UserComponent>
										<span>
											{index + 1}. {name}
										</span>
										<span>
											{format(new Date(+createdAt), 'LLLL, dd, yyyy')}
										</span>
									</UserComponent>
								</Link>
							) : (
								<h5>No Registered Users</h5>
							)}
						</Fragment>
					)
				)}
			</RightSideWrapper>
		</StyledGrid>
	);
};

export default RightSide;
