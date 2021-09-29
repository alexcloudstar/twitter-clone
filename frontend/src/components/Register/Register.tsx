import { ErrorComponent } from 'components/ErrorComponent';
import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useRegisterMutation } from 'src/generated/graphql';
import {
	RegisterBtn,
	RegisterForm,
	RegisterHolder,
	RegisterWrapper
} from './style';
import { RegisterProps } from './types';

interface IRegisterState {
	email: string;
	password: string;
	username: string;
}

const Register: FC<RegisterProps> = (): JSX.Element => {
	const [errorMessage, setErrorMessage] = useState<string>('');
	const history = useHistory();

	const {
		register: registerHook,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<IRegisterState>();

	const [register] = useRegisterMutation();

	const onSubmit: SubmitHandler<IRegisterState> = async (data) => {
		try {
			await register({
				variables: {
					email: data.email,
					username: data.username,
					password: data.password
				}
			});
			history.push('/home');
		} catch (error) {
			setErrorMessage(error.message);
		}
	};

	return (
		<RegisterWrapper>
			<RegisterForm onSubmit={handleSubmit(onSubmit)}>
				<RegisterHolder>
					<label htmlFor="username">Username: </label>
					<input
						type="text"
						id="username"
						name="username"
						{...registerHook('username', { required: true })}
					/>
					{errors.password && (
						<ErrorComponent errorMsg={'This field is required'} />
					)}
				</RegisterHolder>
				<RegisterHolder>
					<label htmlFor="email">Email: </label>
					<input
						type="text"
						id="email"
						name="email"
						{...registerHook('email', { required: true })}
					/>
					{errors.password && (
						<ErrorComponent errorMsg={'This field is required'} />
					)}
				</RegisterHolder>
				<RegisterHolder>
					<label htmlFor="password">Password: </label>
					<input
						type="password"
						id="password"
						name="password"
						{...registerHook('password', { required: true })}
					/>
					{errors.password && (
						<ErrorComponent errorMsg={'This field is required'} />
					)}
				</RegisterHolder>
				<ErrorComponent errorMsg={errorMessage} />
				<RegisterBtn type="submit">Create account</RegisterBtn>
			</RegisterForm>
		</RegisterWrapper>
	);
};

export default Register;
