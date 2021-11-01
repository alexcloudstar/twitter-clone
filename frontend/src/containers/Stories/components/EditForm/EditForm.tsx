import { ErrorComponent, StyledButton } from 'components/globals';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { socket } from 'src/config/socket';
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
	const [createStory, { data, loading, error }] = useCreateStoryMutation();

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
			await createStory({ variables: { storyImageUrl } });
			handleClose();
			setSnackBarProps({
				isOpen: true,
				message: 'Story added successfully 🎉',
				variant: 'success'
			});
			socket.emit('addStory', { story: data.createStory });
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
					{...register('storyImageUrl', { required: true })}
				/>
				{errors.storyImageUrl && (
					<ErrorComponent errorMsg={'This field is required'} />
				)}
				<StyledButton variant="contained" type="submit">
					Add Story
				</StyledButton>
			</EditFormWrapper>
		</>
	);
};

export default EditForm;
