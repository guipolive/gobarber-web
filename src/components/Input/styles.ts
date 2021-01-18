import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;

	background: #232129;
	border: 2px solid #232129;
	border-radius: 10px;

	padding: 16px;
	width: 100%;

	& + div {
		margin-top: 8px;
	}

	svg {
		margin-right: 18px; // margem nele porque se não existir, perde a margem
		color: #666360;
	}

	
	input {
		background-color: transparent;
		flex: 1; // ocupa todo o espaço disponível
		color: white;

		&::placeholder {
			color: #666360;
		}

		&:-webkit-autofill {
			-webkit-box-shadow: 0 0 0 30px #232129 inset;
			-webkit-text-fill-color: white !important;
		}
	}
`;