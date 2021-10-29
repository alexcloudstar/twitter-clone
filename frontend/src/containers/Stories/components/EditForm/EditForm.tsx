import { SnackBar, StyledButton } from 'components/globals';
import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateStoryMutation } from 'src/generated/graphql';
import { EditFormWrapper, StyledTextField } from './style';

export type EditProfileState = {
	storyImageUrl: string;
};

type AddStoryProps = {
	handleClose: () => void;
};

const EditForm: FC<AddStoryProps> = ({ handleClose }) => {
	const [createStory] = useCreateStoryMutation();

	const [snackBarProps, setSnackBarProps] = useState({
		isOpen: false,
		message: null,
		variant: null
	});

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<EditProfileState>();

	const onSubmit: SubmitHandler<EditProfileState> = async ({
		storyImageUrl
	}) => {
		try {
			createStory({ variables: { storyImageUrl } });
			handleClose();
			setSnackBarProps({
				isOpen: true,
				message: 'Story added successfully 🎉',
				variant: 'success'
			});
		} catch (error) {
			console.log(error);
			setSnackBarProps({
				isOpen: true,
				message: 'Story was not added successfully 😢',
				variant: 'danger'
			});
		}
	};

	return (
		<>
			<EditFormWrapper onSubmit={handleSubmit(onSubmit)}>
				<h3>Add story</h3>
				<StyledTextField
					id="outlined-basic"
					variant="outlined"
					label="Story Photo Url"
					{...register('storyImageUrl')}
				/>

				<StyledButton variant="contained" type="submit">
					Add Story
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
