import styled from 'styled-components/macro';
import { coloredContainer } from '../../helpers/styles/mixins/coloredContainer';
import { media } from '../../helpers/styles/mixins/media';
import { textShadow } from '../../helpers/styles/mixins/textShadow';

export const YellowContainer = styled.section`
  max-width: 50rem;
  margin: auto;
  margin-top: 3rem;

  ${coloredContainer(10, 'yellow', 'yellowShadow', 0.5)};
  ${textShadow('whiteShadow')};
`;

export const BlueContainer = styled.div`
  ${coloredContainer(10, 'blue', 'blueShadow', 0.5)};

  ${media(500)} {
    ${coloredContainer(10, 'blue', 'blueShadow', 2)};
  }
`;

export const LightBlueContainer = styled.div`
  ${coloredContainer(6, 'lightBlue', 'lightBlueShadow', 0.5)};

  ${media(500)} {
    ${coloredContainer(6, 'lightBlue', 'lightBlueShadow', 1)};
  }
`;

export const Title = styled.div`
  ${coloredContainer(6, 'white', 'whiteShadow', 0.5)};

  display: flex;
  align-items: center;
  flex-direction: column;
  
  font-size: 1.5rem;

  ${media(500)} {
    flex-direction: row;
    justify-content: center;
  } 
`;

export const Content = styled.article`
  ${coloredContainer(6, 'white', 'whiteShadow', 4)};
  padding-left: 2rem;
  padding-right: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
