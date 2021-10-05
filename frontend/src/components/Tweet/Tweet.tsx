import React, { FC } from 'react';
import { Tweet, useGetUserQuery } from 'src/generated/graphql';

const Tweet: FC<Tweet> = ({
	id,
	tweet,
	points,
	createdAt,
	creatorId,
	updatedAt,
	voteStatus
}) => {
	const { data, loading, error } = useGetUserQuery({
		variables: { user_id: creatorId }
	});

	if (loading) return <div>Loading...</div>;

	if (error) return <div>Error... </div>;

	return (
		<div>
			<strong>Tweet</strong>
			<h5>
				Tweet text: <span>{tweet}</span>
			</h5>
			<h5>
				Creator: <span>{data.getUser.user.username}</span>
			</h5>
			<br />
			<hr />
			<br />
		</div>
	);
};

export default Tweet;
