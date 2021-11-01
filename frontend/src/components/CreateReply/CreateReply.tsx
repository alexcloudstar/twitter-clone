import { StyledButton } from 'components/globals';
import { ErrorComponent } from 'components/globals/ErrorComponent';
import React, { FC, useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useReplyToTweetMutation } from 'src/generated/graphql';
import { CharacterCount, CreateReplyForm, CreateReplyWrapper } from './style';
import { CreateReplyProps, CreateReplyState } from './types';

const CreateReply: FC<CreateReplyProps> = ({ tweetId, handleCloseModal }) => {
	const [maxChars] = useState<number>(250);
	const [currentChars, setCurrentChars] = useState<number>(0);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<CreateReplyState>();

	const [createReply] = useReplyToTweetMutation();

	const onSubmit: SubmitHandler<CreateReplyState> = async (data) => {
		try {
			await createReply({
				variables: {
					tweetId,
					reply: data.reply
				}
			});
		} catch (error) {
			console.log(error);
		}
		handleCloseModal();
	};

	const onChange = useCallback((e) => {
		setCurrentChars(e.target.value.length);
	}, []);

	return (
		<CreateReplyWrapper>
			<CreateReplyForm onSubmit={handleSubmit(onSubmit)}>
				<textarea
					name="createReply"
					id="createReply"
					placeholder="What's happening?"
					{...register('reply', { required: true })}
					onChange={onChange}
				></textarea>
				<StyledButton type="submit">Reply</StyledButton>
				{errors.reply && <ErrorComponent errorMsg={'This field is required'} />}
				<CharacterCount>
					{currentChars}/{maxChars}
				</CharacterCount>
			</CreateReplyForm>
		</CreateReplyWrapper>
	);
};

export default CreateReply;
