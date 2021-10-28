import React, { FC, useEffect, useState } from 'react';
import {
	ChangeFormText,
	WelcomeLeft,
	WelcomeRight,
	WelcomeWrapper
} from './styled';
import { WelcomeProps } from './types';
import welcomeBg from 'assets/img/WelcomeBg.png';
import { Register } from 'components/routes/Register';
import { Login } from 'components/routes';
import { Link, useHistory } from 'react-router-dom';
import { useMeQuery } from 'src/generated/graphql';

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
		<WelcomeWrapper>
			<div className="h-full grid grid-cols-1 md:grid-cols-2">
				<WelcomeLeft>
					<img src={welcomeBg} alt="" className="h-full" />
				</WelcomeLeft>
				<WelcomeRight>
					<Link to="/home">Home</Link>
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
			</div>
		</WelcomeWrapper>
	);
};

export default Welcome;
