import React, { FC, useState } from 'react';
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
	const [formData, setFormData] = useState<IRegisterState>();

	const [register] = useRegisterMutation();

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		await register({
			variables: {
				email: formData.email,
				username: formData.username,
				password: formData.password
			}
		});
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	// TODO: https://react-hook-form.com/api

	return (
		<RegisterWrapper>
			<RegisterForm onSubmit={onSubmit}>
				<RegisterHolder>
					<label htmlFor="username">Username: </label>
					<input
						type="text"
						id="username"
						name="username"
						onChange={onChange}
					/>
				</RegisterHolder>
				<RegisterHolder>
					<label htmlFor="email">Email: </label>
					<input type="text" id="email" name="email" onChange={onChange} />
				</RegisterHolder>
				<RegisterHolder>
					<label htmlFor="password">Password: </label>
					<input
						type="password"
						id="password"
						name="password"
						onChange={onChange}
					/>
				</RegisterHolder>
				<RegisterBtn type="submit">Create account</RegisterBtn>
			</RegisterForm>
		</RegisterWrapper>
	);
};

export default Register;
