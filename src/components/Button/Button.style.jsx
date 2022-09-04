import styled from 'styled-components/macro';
import { createColoredContainer } from '../../helpers/styles/createColoredContainer';
import { createTextShadow } from '../../helpers/styles/textShadow';
import vars from '../../helpers/styles/variables';

export const YellowContainer = styled.div`
  ${createColoredContainer(6, 'yellow', 'yellowShadow', 0.5)};
`;

export const BlueContainer = styled.div`
  ${createColoredContainer(6, 'blue', 'blueShadow', 0.5)};
`;

export const Button = styled.button`
  color: ${vars.color.white};
  ${createTextShadow('blueShadow')};

  position: absolute;
  left: 50%;
  translate: -50%;

  &:active {
    ${BlueContainer} {
      ${createColoredContainer(6, 'blue', 'blue', 0.5)};
      border-top: 3px solid ${vars.color.blueShadow};
      border-bottom: 3px solid ${vars.color.blue};
    }
  }
`;
