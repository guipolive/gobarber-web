import React from 'react';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi'

import {Container, Content, Background} from './styles';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
	return (
		<Container>
			<Content>
				<img src={logoImg} alt="Go Barber"/>

				<form className="form">
					<h1>Faça seu login</h1>
					
					<Input 
						placeholder="Email"
						name="email"
						icon={FiMail}
					/>
					<Input 
						name="password"
						type="password" 
						placeholder="Senha"
						icon={FiLock}
					/>

					<Button>Entrar</Button>

					<a className="forgot" href="#">Esqueci minha senha</a>

					<a className="signup" href="">
						<FiLogIn size={17}/>
						Criar Conta</a>
				</form>
			</Content>

			<Background />
		</Container>
	);
};

export default Login;