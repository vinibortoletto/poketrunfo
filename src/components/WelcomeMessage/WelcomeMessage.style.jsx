import styled from 'styled-components/macro';
import { coloredContainer } from '../../helpers/styles/coloredContainer';

export const YellowContainer = styled.section`
  ${coloredContainer(10, 'yellow', 'yellowShadow', 0.5)};
`;

export const BlueContainer = styled.div`
  ${coloredContainer(10, 'blue', 'blueShadow', 0.5)};
`;

export const LightBlueContainer = styled.div`
  ${coloredContainer(6, 'lightBlue', 'lightBlueShadow', 0.5)};
`;

export const Title = styled.div`
  ${coloredContainer(6, 'white', 'whiteShadow', 0.5)};

  display: flex;
  align-items: center;
  flex-direction: column;
  
  font-size: 1.5rem;
`;

export const Content = styled.article`
  ${coloredContainer(6, 'white', 'whiteShadow', 4)};
  padding-left: 2rem;
  padding-right: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
