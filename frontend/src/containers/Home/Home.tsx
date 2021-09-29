import React, { FC, useState } from 'react';
import { ChangeFormText, HomeWrapper } from './styled';
import { HomeProps } from './types';
import HomeBg from 'assets/img/homeBg.png';
import { Register } from 'components/Register';
import { Login } from 'components/Login';

const Home: FC<HomeProps> = (): JSX.Element => {
	const [isLogin, setIsLogin] = useState<boolean>(true);

	const changeForm = (): void => {
		setIsLogin(!isLogin);
	};

	return (
		<HomeWrapper>
			<div className="h-full grid grid-cols-12 md:grid-cols-2">
				<div>
					<img src={HomeBg} alt="" className="h-full" />
				</div>
				<div className="flex flex-col justify-center items-center">
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
				</div>
			</div>
		</HomeWrapper>
	);
};

export default Home;
