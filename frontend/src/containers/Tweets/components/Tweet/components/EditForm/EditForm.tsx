import { SnackBar, StyledButton } from 'components/globals';
import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Tweet, useEditTweetMutation } from 'src/generated/graphql';
import { EditFormWrapper, StyledTextField } from './style';

export type EditProfileState = {
	newTweetValue: string;
};

type EditTweetProps = {
	handleClose: () => void;
	tweetId: Tweet['id'];
	tweet?: Tweet['tweet'];
};

const EditForm: FC<EditTweetProps> = ({ tweetId, handleClose, tweet }) => {
	const [editTweet] = useEditTweetMutation();

	const [snackBarProps, setSnackBarProps] = useState({
		isOpen: false,
		message: null,
		variant: null
	});

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<EditProfileState>({
		defaultValues: {
			newTweetValue: tweet
		}
	});

	const onSubmit: SubmitHandler<EditProfileState> = async ({
		newTweetValue
	}) => {
		try {
			editTweet({ variables: { tweetId, newTweetValue } });
			handleClose();
			setSnackBarProps({
				isOpen: true,
				message: 'Tweet updated successfully 🎉',
				variant: 'success'
			});
		} catch (error) {
			console.log(error);
			setSnackBarProps({
				isOpen: true,
				message: 'Tweet was not updated successfully 😢',
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
					label="Tweet"
					{...register('newTweetValue')}
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
