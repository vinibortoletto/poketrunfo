import styled from 'styled-components/macro';
import { coloredContainer } from '../../helpers/styles/mixins/coloredContainer';
import { textShadow } from '../../helpers/styles/mixins/textShadow';
import variables from '../../helpers/styles/variables';

const { color } = variables;

export const YellowContainer = styled.div`
  width: 100%;
  max-width: 20rem;
  ${coloredContainer(5, 'yellow', 'yellowShadow', 0.5)};
`;

export const BlueContainer = styled.div`
  ${coloredContainer(5, 'blue', 'blueShadow', 1.5)};
`;

export const Content = styled.div`
  ${coloredContainer(5, 'lightBlue', 'lightBlueShadow', 0.5)};
`;

export const Title = styled.div`
  ${coloredContainer(5, 'white', 'whiteShadow', 0.5)};
  ${textShadow('whiteShadow')}
  text-align: center;
  margin-bottom: 1rem;
`;

export const ImagesContainer = styled.div`
  ${coloredContainer(5, 'white', 'whiteShadow', 0.2)};
  margin: 0 0.5rem 2rem 0.5rem;
`;

export const Background = styled.img`
  width: 100%;
  border: 3px solid ${color.blue};
  border-top: 0;
`;

export const Pokemon = styled.img`
  width: 6rem;
  position: absolute;
  translate: -5rem 2rem;
  filter: drop-shadow(0px 5px 3px ${color.blueShadow});
`;

export const StatList = styled.ul`
  display: grid;
  gap: 0.2rem;
  margin: 0 0.5rem;
  font-size: 1.3rem;
`;

export const StatItem = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0.5rem;
`;

export const StatName = styled.div`
  ${coloredContainer(5, 'blue', 'blueShadow', 0)};
  ${textShadow('blueShadow')};
  padding: 0 1rem;
  color: ${color.white};
`;

export const StatPoints = styled.div`
  ${coloredContainer(5, 'yellow', 'yellowShadow', 0)};
  ${textShadow('yellowShadow')};
  padding: 0 1rem;
  color: ${color.darkBlue};
  text-align: center;

`;

export const Type = styled.div`
  ${coloredContainer(5, 'yellow', 'yellowShadow', 0)};
  width: fit-content;
  margin: 1rem 0.5rem 0.5rem;
  padding: 0 0.5rem;
  font-size: 1rem;
  text-align: center;
`;
