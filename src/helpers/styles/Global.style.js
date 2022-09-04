import { createGlobalStyle } from 'styled-components/macro';
import vars from './variables';
import './fonts.css';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: ${vars.fontFamily.special};
    box-sizing: border-box;
  }

  body {
    background-color: ${vars.color.darkBlue};
    color:  ${vars.color.darkBlue};
    font-size: 1.5rem;
    font-family: ${vars.fontFamily.special};
    padding: 0 1rem;
    text-shadow: 0px 2px 3px ${vars.color.whiteShadow};
  }

  h1, h2 {
    font-weight: normal;
  }
`;

export default GlobalStyles;
