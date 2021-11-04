import { StyledButton } from 'components/globals';
import { ErrorComponent } from 'components/globals/ErrorComponent';
import React, { FC, useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { socket } from 'src/config/socket';
import { useCreateTweetMutation } from 'src/generated/graphql';
import { CharacterCount, CreateTweetForm, CreateTweetWrapper } from './style';
import { CreateTweetProps, CreateTweetState } from './types';

const CreateTweet: FC<CreateTweetProps> = ({ handleCloseModal }) => {
	const [maxChars] = useState<number>(250);
	const [currentChars, setCurrentChars] = useState<number>(0);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<CreateTweetState>();

	const [createTweet] = useCreateTweetMutation();

	const onSubmit: SubmitHandler<CreateTweetState> = async (data) => {
		try {
			const tweet = await createTweet({
				variables: {
					tweet: data.tweet
				}
			});
			socket.emit('addTweet', { tweet: tweet.data.createTweet });
		} catch (error) {
			console.log(error);
		}
		handleCloseModal();
	};

	const onChange = useCallback((e) => {
		setCurrentChars(e.target.value.length);
	}, []);

	return (
		<CreateTweetWrapper>
			<CreateTweetForm onSubmit={handleSubmit(onSubmit)}>
				<textarea
					name="createTweet"
					id="createTweet"
					placeholder="What's happening?"
					{...register('tweet', { required: true })}
					onChange={onChange}
				/>
				<StyledButton type="submit">Tweet</StyledButton>
				{errors.tweet && <ErrorComponent errorMsg={'This field is required'} />}
				<CharacterCount>
					{currentChars}/{maxChars}
				</CharacterCount>
			</CreateTweetForm>
		</CreateTweetWrapper>
	);
};

export default CreateTweet;
