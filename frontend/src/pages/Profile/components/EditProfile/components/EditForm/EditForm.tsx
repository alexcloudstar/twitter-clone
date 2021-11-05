import { StyledButton } from 'components/globals';
import {
	EditFormWrapper,
	StyledTextField
} from 'components/globals/EditFormWrapper';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEditProfileMutation, User } from 'src/generated/graphql';
import { UserDataProps } from 'src/pages/Profile/types';
import { formatBirthday } from 'utils/dateFormats';

export type EditProfileState = Partial<User>;

const EditForm: FC<UserDataProps> = ({
	name,
	website,
	avatarUrl,
	bio,
	birthday,
	coverPhotoUrl,
	email,
	location,
	handleClose,
	id
}) => {
	const formatedBirthday = formatBirthday(birthday);
	console.log(birthday);
	console.log(formatedBirthday);

	const [editProfile] = useEditProfileMutation();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<EditProfileState>({
		defaultValues: {
			name: name !== 'null' ? name : '',
			website: website !== 'null' ? website : '',
			avatarUrl: avatarUrl !== 'null' ? avatarUrl : '',
			bio: bio !== 'null' ? bio : '',
			birthday: formatedBirthday,
			coverPhotoUrl: coverPhotoUrl !== 'null' ? coverPhotoUrl : '',
			email,
			location: location !== 'null' ? location : ''
		}
	});

	const onSubmit: SubmitHandler<EditProfileState> = async (data) => {
		try {
			editProfile({ variables: { userId: id, ...data } });
			handleClose();
		} catch (error) {
			console.log(error);
			handleClose();
		}
	};

	return (
		<>
			<EditFormWrapper onSubmit={handleSubmit(onSubmit)}>
				<h3>Edit Profile</h3>
				<StyledTextField
					id="outlined-basic"
					variant="outlined"
					label="Name"
					{...register('name')}
				/>
				<StyledTextField
					id="outlined-basic"
					variant="outlined"
					label="Email"
					{...register('email')}
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
				<StyledButton variant="contained" type="submit">
					Submit Changes
				</StyledButton>
			</EditFormWrapper>
		</>
	);
};

export default EditForm;
