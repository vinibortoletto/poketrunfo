import styled from 'styled-components/macro';
import { coloredContainer } from '../../helpers/styles/coloredContainer';
import vars from '../../helpers/styles/variables';

export const YellowContainer = styled.div`
  ${coloredContainer(6, 'yellow', 'yellowShadow', 0.5)};
`;

export const BlueContainer = styled.div`
  ${coloredContainer(6, 'blue', 'blueShadow', 0.5)};
`;

export const Button = styled.button`
  color: ${vars.color.white};
  text-shadow: 0px 2px 3px ${vars.color.blueShadow};

  position: absolute;
  left: 50%;
  translate: -50%;

  &:active {
    ${BlueContainer} {
      ${coloredContainer(6, 'blue', 'blue', 0.5)};
      border-top: 3px solid ${vars.color.blueShadow};
      border-bottom: 3px solid ${vars.color.blue};
    }
  }
`;
