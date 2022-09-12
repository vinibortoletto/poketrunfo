import { createGlobalStyle } from 'styled-components/macro';
import variables from './variables';
import './fonts.css';

const { color, fontFamily } = variables;

const GlobalStyles = createGlobalStyle`
  * {
    font-family: ${fontFamily.special};
    box-sizing: border-box;
  }

  body {
    max-width: 80rem;
    margin: auto;
    padding: 0 1rem;
    overflow-x: hidden;
    background-color: ${color.blueDark};
    color:  ${color.blueDark};
    font-size: 1.5rem;
    font-family: ${fontFamily.special};
    
  }

  h1, h2 {
    font-weight: normal;
  }
  
  .slick-list {
    overflow: unset;
  }
`;

export default GlobalStyles;
