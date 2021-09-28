import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useLoginMutation } from 'src/generated/graphql';
import { LoginBtn, LoginForm, LoginHolder, LoginWrapper } from './style';
import { LoginProps } from './types';

interface ILoginState {
	usernameOrEmail: string;
	password: string;
}

const Login: FC<LoginProps> = (): JSX.Element => {
	const [formData, setFormData] = useState<ILoginState>();
	const [userState, setUserState] = useState('');

	const [login] = useLoginMutation();

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const response = await login({
				variables: {
					usernameOrEmail: formData.usernameOrEmail,
					password: formData.password
				}
			});
			setUserState(`User: ${response.data.login.user.username}`);
		} catch (error) {
			setUserState(`Error: ${error.message}`);
		}
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>): void =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	// TODO: https://react-hook-form.com/api

	return (
		<LoginWrapper>
			{userState}
			<LoginForm onSubmit={onSubmit}>
				<LoginHolder>
					<label htmlFor="usernameOrEmail">Username or Email: </label>
					<input
						type="text"
						id="usernameOrEmail"
						name="usernameOrEmail"
						onChange={onChange}
					/>
				</LoginHolder>
				<LoginHolder>
					<label htmlFor="password">Password: </label>
					<input
						type="password"
						id="password"
						name="password"
						onChange={onChange}
					/>
				</LoginHolder>
				<LoginBtn type="submit">Login</LoginBtn>
			</LoginForm>
		</LoginWrapper>
	);
};

export default Login;
