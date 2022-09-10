import styled from 'styled-components/macro';
import { coloredContainer } from '../../helpers/styles/mixins/coloredContainer';
import { media } from '../../helpers/styles/mixins/media';
import { textShadow } from '../../helpers/styles/mixins/textShadow';
import variables from '../../helpers/styles/variables';

const { color } = variables;

export const YellowContainer = styled.div`
  ${coloredContainer(6, 'yellow', 'yellowShadow', 0.5)};
`;

export const BlueContainer = styled.div`
  ${coloredContainer(6, 'blue', 'blueShadow', 0.5)};
`;

export const Button = styled.button`
  min-width: 10rem;
  color: ${color.white};
  ${textShadow('blueShadow')};

  ${({ currentPath }) => (currentPath === '/' && `
    position: absolute;
    left: 50%;
    translate: -50%;
    
    ${media(500)} {
      translate: -50% 2.5rem;
    }
  `)}

  ${({ currentPath }) => (currentPath !== '/' && `
    margin-top: 3rem;
  `)}
  
  &:active {
    ${BlueContainer} {
      ${coloredContainer(6, 'blue', 'blueShadow', 0.5)};
      border-top: 3px solid ${color.blueShadow};
      border-bottom: 3px solid ${color.blue};
    }
  }


`;
