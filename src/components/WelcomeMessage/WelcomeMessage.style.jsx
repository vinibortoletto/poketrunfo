import styled from 'styled-components/macro';
import { createColoredContainer } from '../../helpers/styles/createColoredContainer';
import { createTextShadow } from '../../helpers/styles/textShadow';

export const YellowContainer = styled.section`
  max-width: 50rem;
  margin: 5rem auto 0 auto;


  ${createColoredContainer(10, 'yellow', 'yellowShadow', 0.5)};
  ${createTextShadow('whiteShadow')};
`;

export const BlueContainer = styled.div`
  ${createColoredContainer(10, 'blue', 'blueShadow', 0.5)};
`;

export const LightBlueContainer = styled.div`
  ${createColoredContainer(6, 'lightBlue', 'lightBlueShadow', 0.5)};
`;

export const Title = styled.div`
  ${createColoredContainer(6, 'white', 'whiteShadow', 0.5)};

  display: flex;
  align-items: center;
  flex-direction: column;
  
  font-size: 1.5rem;
`;

export const Content = styled.article`
  ${createColoredContainer(6, 'white', 'whiteShadow', 4)};
  padding-left: 2rem;
  padding-right: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
