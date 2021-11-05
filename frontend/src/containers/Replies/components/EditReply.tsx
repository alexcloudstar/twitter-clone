import { StyledButton } from 'components/globals';
import {
	EditFormWrapper,
	StyledTextField
} from 'components/globals/EditFormWrapper';
import React, { FC } from 'react';
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
		} catch (error) {
			console.log(error);
			handleClose();
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
		</>
	);
};

export default EditForm;
