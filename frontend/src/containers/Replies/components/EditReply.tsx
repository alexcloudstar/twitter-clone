import { SnackBar, StyledButton } from 'components/globals';

import {
	StyledTextField,
	EditFormWrapper
} from 'containers/Tweets/components/Tweet/components/EditForm/style';
import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { socket } from 'src/config/socket';
import { Replies, useEditReplyMutation } from 'src/generated/graphql';

export type EditProfileState = {
	newReplyValue: string;
};

type EditTweetProps = {
	handleClose: () => void;
	replyId: Replies['id'];
	reply?: Replies['reply'];
};

const EditForm: FC<EditTweetProps> = ({ replyId, handleClose, reply }) => {
	const [editReply] = useEditReplyMutation();

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
			newReplyValue: reply
		}
	});

	const onSubmit: SubmitHandler<EditProfileState> = async ({
		newReplyValue
	}) => {
		try {
			const editedReply = await editReply({
				variables: { replyId, newReplyValue }
			});

			socket.emit('editReply', { replies: editedReply.data.editReply });

			handleClose();
			setSnackBarProps({
				isOpen: true,
				message: 'Tweet updated successfully 🎉',
				variant: 'success'
			});
		} catch (error) {
			console.log(error);
			handleClose();
			setSnackBarProps({
				isOpen: true,
				message: 'Tweet was not updated successfully 😢',
				variant: 'error'
			});
		}
	};

	return (
		<>
			<EditFormWrapper onSubmit={handleSubmit(onSubmit)}>
				<h3>Edit Reply: {reply}</h3>
				<StyledTextField
					id="outlined-basic"
					variant="outlined"
					label="Reply"
					{...register('newReplyValue')}
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
