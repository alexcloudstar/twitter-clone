import { StyledButton } from 'components/globals';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateStoryMutation } from 'src/generated/graphql';
import SnackBarProps from 'types/SnackBarProps';
import { EditFormWrapper, StyledTextField } from './style';

export type EditProfileState = {
	storyImageUrl: string;
};

type AddStoryProps = {
	handleClose: () => void;
} & SnackBarProps;

const EditForm: FC<AddStoryProps> = ({
	handleClose,
	snackBarProps,
	setSnackBarProps
}) => {
	const [createStory] = useCreateStoryMutation();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<EditProfileState>();

	const onSubmit: SubmitHandler<EditProfileState> = async ({
		storyImageUrl
	}) => {
		try {
			if (errors) {
				handleClose();
				setSnackBarProps({
					isOpen: true,
					message: 'Story was not added 😢',
					variant: 'error'
				});
				return;
			}

			createStory({ variables: { storyImageUrl } });
			handleClose();
			setSnackBarProps({
				isOpen: true,
				message: 'Story added successfully 🎉',
				variant: 'success'
			});
		} catch (error) {
			console.log(error);
			handleClose();
			setSnackBarProps({
				isOpen: true,
				message: 'Story was not added 😢',
				variant: 'error'
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
		</>
	);
};

export default EditForm;
