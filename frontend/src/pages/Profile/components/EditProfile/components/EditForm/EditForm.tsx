import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { User } from 'src/generated/graphql';
import { UserDataProps } from 'src/pages/Profile/types';
import { EditFormWrapper, StyledTextField } from './style';

export type EditProfileState = {
	name: string;
	avatarUrl: string;
	coverPhotoUrl: string;
	location: string;
	website: string;
	birthday: string;
	bio: string;
};

const EditForm: FC<UserDataProps> = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<EditProfileState>();

	const onSubmit: SubmitHandler<EditProfileState> = async (data) => {
		console.log(data);
	};

	return (
		<EditFormWrapper onSubmit={handleSubmit(onSubmit)}>
			<StyledTextField
				id="outlined-basic"
				label="Name"
				variant="outlined"
				{...register('name')}
			/>
			<StyledTextField
				id="outlined-basic"
				label="Avatar"
				variant="outlined"
				{...register('avatarUrl')}
			/>
			<StyledTextField
				id="outlined-basic"
				label="Cover Photo"
				variant="outlined"
				{...register('coverPhotoUrl')}
			/>
			<StyledTextField
				id="outlined-basic"
				label="Location"
				variant="outlined"
				{...register('location')}
			/>
			<StyledTextField
				id="outlined-basic"
				label="Website"
				variant="outlined"
				{...register('website')}
			/>
			<StyledTextField
				id="outlined-basic"
				label="Birthday"
				variant="outlined"
				{...register('birthday')}
			/>
			<StyledTextField
				id="outlined-basic"
				label="Bio"
				variant="outlined"
				{...register('bio')}
			/>
		</EditFormWrapper>
	);
};

export default EditForm;
