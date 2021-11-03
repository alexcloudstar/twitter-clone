import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
html,
body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
html,
body {
    width: 100%;
    height: 100%;
    background: linear-gradient(#15202B, #255878) no-repeat center center fixed;
}

body {
    padding: 45px 30px;

    @media(min-width: 991px) {
        padding: 45px 90px;
    }
}

#root {
	height: 100%;
}
`;

export default GlobalStyles;
