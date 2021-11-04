import { StyledButton } from 'components/globals';
import {
	EditFormWrapper,
	StyledTextField
} from 'components/globals/EditFormWrapper';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { socket } from 'src/config/socket';
import { Tweet, useEditTweetMutation } from 'src/generated/graphql';

export type EditProfileState = {
	newTweetValue: string;
	newTweetImage: string;
};

type EditTweetProps = {
	handleClose: () => void;
	tweetId: Tweet['id'];
	tweet?: Tweet['tweet'];
	tweetImage?: Tweet['tweetImage'];
};

const EditForm: FC<EditTweetProps> = ({
	tweetId,
	handleClose,
	tweet,
	tweetImage
}) => {
	const [editTweet] = useEditTweetMutation();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<EditProfileState>({
		defaultValues: {
			newTweetValue: tweet,
			newTweetImage: tweetImage
		}
	});

	const onSubmit: SubmitHandler<EditProfileState> = async ({
		newTweetValue,
		newTweetImage
	}) => {
		try {
			const editedTweet = await editTweet({
				variables: { tweetId, newTweetValue, newTweetImage }
			});

			socket.emit('editTweet', { tweets: editedTweet.data.editTweet });

			handleClose();
		} catch (error) {
			console.log(error);
			handleClose();
		}
	};

	return (
		<>
			<EditFormWrapper onSubmit={handleSubmit(onSubmit)}>
				<h3>Edit Tweet: {tweet}</h3>
				<StyledTextField
					id="outlined-basic"
					variant="outlined"
					label="Tweet"
					{...register('newTweetValue')}
				/>

				<StyledTextField
					id="outlined-basic"
					variant="outlined"
					label="Tweet Image"
					{...register('newTweetImage')}
				/>

				<StyledButton variant="contained" type="submit">
					Submit Changes
				</StyledButton>
			</EditFormWrapper>
		</>
	);
};

export default EditForm;
