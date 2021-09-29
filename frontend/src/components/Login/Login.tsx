import { ErrorComponent } from 'components/ErrorComponent';
import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useLoginMutation } from 'src/generated/graphql';
import { LoginBtn, LoginForm, LoginHolder, LoginWrapper } from './style';
import { LoginProps } from './types';

interface ILoginState {
	usernameOrEmail: string;
	password: string;
}

const Login: FC<LoginProps> = (): JSX.Element => {
	const [errorMessage, setErrorMessage] = useState<string>('');
	const history = useHistory();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ILoginState>();

	const [login] = useLoginMutation();

	const onSubmit: SubmitHandler<ILoginState> = async (data) => {
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
				<LoginBtn type="submit">Login</LoginBtn>
			</LoginForm>
		</LoginWrapper>
	);
};

export default Login;
