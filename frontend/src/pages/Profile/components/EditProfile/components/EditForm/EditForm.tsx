import { SnackBar, StyledButton } from 'components/globals';
import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEditProfileMutation, User } from 'src/generated/graphql';
import { UserDataProps } from 'src/pages/Profile/types';
import { formatBirthday } from 'utils/dateFormats';
import { EditFormWrapper, StyledTextField } from './style';

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
	handleClose
}) => {
	const formatedBirthday = formatBirthday(birthday);

	const [editProfile] = useEditProfileMutation();

	const [snackBarProps, setSnackBarProps] = useState({
		isOpen: false,
		message: null,
		variant: null
	});
	console.log(name);
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
			editProfile({ variables: { userId: 1, ...data } });
			handleClose();
			setSnackBarProps({
				isOpen: true,
				message: 'Profile updated successfully 🎉',
				variant: 'success'
			});
		} catch (error) {
			console.log(error);
			setSnackBarProps({
				isOpen: true,
				message: 'Profile was not updated successfully 😢',
				variant: 'danger'
			});
		}
	};

	return (
		<>
			<EditFormWrapper onSubmit={handleSubmit(onSubmit)}>
				<h3>Profile Form Editor</h3>
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
			{/* TODO: Fix this (now is rendering in the Modal Form) */}
			<SnackBar
				snackBarProps={snackBarProps}
				setSnackBarProps={setSnackBarProps}
			/>
		</>
	);
};

export default EditForm;
