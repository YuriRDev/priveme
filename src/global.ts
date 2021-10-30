import { createGlobalStyle } from "styled-components";
import COLOR from "./colors";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    background: ${COLOR.Background};
    font-family: Poppins, sans-serif;
    scroll-behavior: smooth;
}
`