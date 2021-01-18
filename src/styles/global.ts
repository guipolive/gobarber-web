import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle `
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
	}

	html, body, #root {
		height: 100%
	}

	body {
		background: #312E38;
		color: #FFF;
		-webkit-font-smoothing: antialiased;
		/* min-height: 100%; */
	}

	button {
		cursor: pointer;
	}

	input, button {
		border: 0;
		outline: 0;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
	
	// específicas da aplicação
	
	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 500;
	}
	
	body, input, button {
		font-family: 'Roboto Slab', serif;
		font-size: 16px;
	}
	`