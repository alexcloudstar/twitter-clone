import { Button } from 'components/globals';
import React, { FC } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useGetUserQuery } from 'src/generated/graphql';
import {
	CoverPhotoWrapper,
	ProfilePhotoWrapper,
	ProfileWrapper,
	TestComp,
	UserInfo,
	UserInfoFields
} from './style';
import { ProfileProps } from './types';

const Profile: FC<ProfileProps> = () => {
	const match: { params: { id: string } } = useRouteMatch();

	const { data, loading } = useGetUserQuery({
		variables: { user_id: +match.params.id }
	});

	if (loading) return <div>Loading...</div>;

	return (
		<ProfileWrapper>
			<h1>{data.getUser.user.username}</h1>

			<CoverPhotoWrapper>
				{/* coverPhoto && img ... */}
				<img
					// src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
					alt=""
				/>
			</CoverPhotoWrapper>
			<TestComp>
				<ProfilePhotoWrapper>
					<img
						src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
						alt=""
					/>
				</ProfilePhotoWrapper>
				<Button type="button">Edit profile</Button>
				<UserInfo>
					<h2>{data.getUser.user.username}</h2>
					<h2>@{data.getUser.user.username}</h2>
				</UserInfo>
			</TestComp>
			<UserInfo>
				<h3>{data.getUser.user.bio}</h3>

				<UserInfoFields>
					{data.getUser.user.location && (
						<span>{data.getUser.user.location}</span>
					)}
					<span>Romania</span>
					{data.getUser.user.website && (
						<span>{data.getUser.user.website}</span>
					)}
					<span>www.alexcloudstar.com</span>
					{data.getUser.user.birthday && (
						<span>{data.getUser.user.birthday}</span>
					)}
				</UserInfoFields>
			</UserInfo>
		</ProfileWrapper>
	);
};

export default Profile;
