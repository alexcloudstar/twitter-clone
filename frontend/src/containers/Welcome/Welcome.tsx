import { Login } from 'components/routes';
import { Register } from 'components/routes/Register';
import { Spinner } from 'components/Spinner';
import React, { FC, Suspense, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useMeQuery } from 'src/generated/graphql';
import { ChangeFormText, WelcomeRight, WelcomeWrapper } from './styled';
import { WelcomeProps } from './types';

const Welcome: FC<WelcomeProps> = (): JSX.Element => {
	const history = useHistory();
	const { data } = useMeQuery();

	const [isLogin, setIsLogin] = useState<boolean>(true);

	const changeForm = (): void => {
		setIsLogin(!isLogin);
	};

	useEffect(() => {
		data && data.me ? history.push('/home') : history.push('/');
	}, [data, history]);

	return (
		<>
			<Suspense fallback={<Spinner />}>
				<WelcomeWrapper>
					<WelcomeRight>
						{!isLogin ? <Register /> : <Login />}
						{!isLogin ? (
							<ChangeFormText onClick={changeForm}>
								<h5>Login</h5>
							</ChangeFormText>
						) : (
							<ChangeFormText onClick={changeForm}>
								<h5>Register</h5>
							</ChangeFormText>
						)}
					</WelcomeRight>
				</WelcomeWrapper>
			</Suspense>
		</>
	);
};

export default Welcome;
