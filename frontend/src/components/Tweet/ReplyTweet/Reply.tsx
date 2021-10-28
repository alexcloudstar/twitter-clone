import { StyledButton } from 'components/globals';
import { ErrorComponent } from 'components/globals/ErrorComponent';
import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouteMatch } from 'react-router';
import { useReplyToTweetMutation } from 'src/generated/graphql';
import { ReplyTweetForm, ReplyTweetWrapper } from './style';
import { ReplyTweetProps, ReplyTweetState } from './types';

const ReplyTweet: FC<ReplyTweetProps> = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ReplyTweetState>();

	const [value, setValue] = useState('');

	const match: { params: { id: string } } = useRouteMatch();

	const [replyTweet] = useReplyToTweetMutation(); // TODO: need to add this to the graphql

	const onSubmit: SubmitHandler<ReplyTweetState> = async (data) => {
		try {
			await replyTweet({
				variables: {
					tweetId: +match.params.id,
					reply: data.reply
				}
			});
		} catch (error) {
			console.log(error);
		}
	};

	const onChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<ReplyTweetWrapper>
			<ReplyTweetForm onSubmit={handleSubmit(onSubmit)}>
				<textarea
					name="replyToTweet"
					id="replyToTweet"
					placeholder="Tweet your reply"
					{...register('reply', { required: true })}
					onChange={onChange}
				></textarea>
				{/* <Button type="submit" props={{ disabled: !value }}>
					Reply
				</Button> */}
				{errors.reply && <ErrorComponent errorMsg={'This field is required'} />}
			</ReplyTweetForm>
		</ReplyTweetWrapper>
	);
};

export default ReplyTweet;
