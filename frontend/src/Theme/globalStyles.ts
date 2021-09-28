import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
html,
body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html,
body {
    width: 100%;
    height: 100%;
}

#root {
	height: 100%
}
`;

export default GlobalStyles;
