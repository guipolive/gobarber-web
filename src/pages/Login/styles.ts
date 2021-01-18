import styled from 'styled-components';
import {shade} from 'polished'


import loginBg from '../../assets/login-bg.png'

export const Container = styled.div`
	height: 100%;

	display: flex;
	align-items: stretch; // estica os filhos
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 100%;
	max-width: 600px;

	.form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		margin: 80px 0;
		width: 340px;

		h1 {
			margin-bottom: 24px;
		}

		a.forgot {
			margin-top: 24px;
			color: #F4EDE8;
			transition: color .2s;

			&:hover {
				color: ${shade(0.2, '#F4EDE8')}
			}
		}
		
		a.signup {
			display: flex;
			align-items: center;
			justify-content: center;

			margin-top: 80px;
			color: #FF9000;
			transition: color .2s;

			&:hover {
				color: ${shade(0.2, '#FF9000')}
			}

			svg {
				margin-right: 15px;
			}
		}
	}
	`

export const Background = styled.div`
	flex: 1;
	width: 100%;
	background: url(${loginBg}) no-repeat center;
	background-size: cover;
	
`