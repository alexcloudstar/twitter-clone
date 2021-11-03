import React, { FC, useState } from 'react';
import { StyledButton, ErrorComponent } from 'components/globals';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useLoginMutation } from 'src/generated/graphql';
import { LoginForm, LoginHolder, LoginWrapper } from './style';
import { LoginProps, LoginState } from './types';

const Login: FC<LoginProps> = (): JSX.Element => {
	const [errorMessage, setErrorMessage] = useState<string>('');
	const history = useHistory();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginState>();

	const [login] = useLoginMutation();

	const onSubmit: SubmitHandler<LoginState> = async (data) => {
		try {
			await login({
				variables: {
					usernameOrEmail: data.usernameOrEmail,
					password: data.password
				}
			});

			history.push('/home');
		} catch (error) {
			setErrorMessage(error.message);
		}
	};

	return (
		<LoginWrapper>
			<LoginForm onSubmit={handleSubmit(onSubmit)}>
				<LoginHolder>
					<label htmlFor="usernameOrEmail">Username or Email: </label>
					<input
						type="text"
						id="usernameOrEmail"
						name="usernameOrEmail"
						{...register('usernameOrEmail', { required: true })}
					/>
					{errors.password && (
						<ErrorComponent errorMsg={'This field is required'} />
					)}
				</LoginHolder>
				<LoginHolder>
					<label htmlFor="password">Password: </label>
					<input
						type="password"
						id="password"
						name="password"
						{...register('password', { required: true })}
					/>
					{errors.password && (
						<ErrorComponent errorMsg={'This field is required'} />
					)}
				</LoginHolder>
				<ErrorComponent errorMsg={errorMessage} />
				<StyledButton type="submit">Login</StyledButton>
			</LoginForm>
		</LoginWrapper>
	);
};

export default Login;
