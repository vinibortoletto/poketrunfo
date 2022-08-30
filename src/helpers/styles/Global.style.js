import { createGlobalStyle } from 'styled-components/macro';
import vars from './variables';
import './fonts.css';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${vars.color.darkBlue};
    color:  ${vars.color.darkBlue};
    font-family: ${vars.fontFamily.special};
    font-size: 1.5rem;
    box-sizing:border-box;
    padding: 0 1rem;
    text-shadow: 0px 2px 3px ${vars.color.whiteShadow};
  }

  h1, h2 {
    font-weight: normal;
  }
`;

export default GlobalStyles;
