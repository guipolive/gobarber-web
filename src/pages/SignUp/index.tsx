import React from 'react';
import {FiArrowLeft, FiMail, FiLock, FiUser} from 'react-icons/fi'

import {Container, Content, Background} from './styles';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp = () => {
	return (
		<Container>
			<Background />
			<Content>
				<img src={logoImg} alt="Go Barber"/>

				<form className="form">
					<h1>Faça seu cadastro</h1>
					
					<Input 
						placeholder="Nome"
						name="name"
						icon={FiUser}
					/>
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

					<Button>Cadastrar</Button>


					<a className="back" href="">
						<FiArrowLeft size={20}/>
						Voltar para o login
					</a>
				</form>
			</Content>
		</Container>
	);
};

export default SignUp;