import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

a {
    text-decoration:none;
    color:#222222;
}

ul,ol,li {
    list-style: none;
}
`

export default GlobalStyle;