import { Button } from 'components/globals/Button';
import { ErrorComponent } from 'components/globals/ErrorComponent';
import React, { FC, useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateTweetMutation } from 'src/generated/graphql';
import { ReplyTweetForm, ReplyTweetWrapper } from './style';
import { ReplyTweetProps, ReplyTweetState } from './types';

const ReplyTweet: FC<ReplyTweetProps> = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ReplyTweetState>();

	// const [replyTweetTweet] = useReplyTweetMutation(); // TODO: need to add this to the graphql

	const onSubmit: SubmitHandler<ReplyTweetState> = async (data) => {
		// try {
		// 	await replyTweetTweet({
		// 		variables: {
		// 			tweet: data.tweet
		// 		}
		// 	});
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	return (
		<ReplyTweetWrapper>
			<ReplyTweetForm onSubmit={handleSubmit(onSubmit)}>
				<textarea
					name="replyToTweet"
					id="replyToTweet"
					placeholder="What's happening?"
					{...register('tweet', { required: true })}
				></textarea>
				<Button type="submit">Reply to Tweet</Button>
				{errors.tweet && <ErrorComponent errorMsg={'This field is required'} />}
			</ReplyTweetForm>
		</ReplyTweetWrapper>
	);
};

export default ReplyTweet;
