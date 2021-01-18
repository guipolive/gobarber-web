import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
	margin-top: 24px;
	background: #FF9000;
	border-radius: 10px;
	border: 0;
	color: #312E38;
	font-weight: 500;

	padding: 16px;
	width: 100%;
	transition: background-color .2s;

	&:hover {
		background: ${shade(0.2, '#FF9000')};
	}
`;