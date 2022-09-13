import styled from 'styled-components/macro';
import variables from '../../../helpers/styles/variables';
import { coloredContainer } from '../../../helpers/styles/mixins/coloredContainer';
import { textShadow } from '../../../helpers/styles/mixins/textShadow';

const { color } = variables;

export const YellowContainer = styled.div`
  ${coloredContainer(5, 'yellow', 'yellowShadow', 0.5)};
  width: 100%;
  max-width: 15rem;
  position: relative;
  margin: 1rem 0.5rem;
`;

export const BlueContainer = styled.div`
  ${coloredContainer(5, 'blue', 'blueShadow', 0.5)};
`;

export const Content = styled.div`
  ${coloredContainer(5, 'babyBlue', 'babyBlueShadow', 0.5)};
`;

export const RemoveButton = styled.button`
  ${coloredContainer(5, 'red', 'redShadow', 0.5)};
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  &:active {
    border: 3px solid ${color.redShadow};
    border-bottom: none;
  }

  img {
    filter: drop-shadow(0px 3px ${color.redShadow});
  }
`;

export const Title = styled.div`
  ${coloredContainer(5, 'white', 'whiteShadow', 0.5)};
  ${textShadow('whiteShadow')}
  text-align: center;
  margin-bottom: 1rem;
  text-transform: capitalize;
`;

export const StatList = styled.ul`
  display: grid;
  gap: 0.2rem;
  font-size: 1rem;
`;

export const StatItem = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0.5rem;
`;

export const StatName = styled.div`
  ${coloredContainer(5, 'blue', 'blueShadow', 0)};
  ${textShadow('blueShadow')};
  color: ${color.white};
  padding: 0 0.5rem;
`;

export const StatPoints = styled.div`
  ${coloredContainer(5, 'yellow', 'yellowShadow', 0)};
  ${textShadow('yellowShadow')};
  color: ${color.darkBlue};
  text-align: center;
`;

export const Type = styled.div`
  ${({ type }) => `
    ${coloredContainer(5, type, `${type}Shadow`, 0)};
    ${textShadow(`${type}Shadow`)};
  `}

  width: fit-content;
  padding: 0 0.5rem;
  margin-top: 0.5rem;
  font-size: 1rem;
  text-align: center;
  color: ${color.white};
`;

export const Illustrations = styled.div`
  ${coloredContainer(5, 'white', 'whiteShadow', 0.2)};
  margin-bottom: 2rem;
  position: relative;
`;

export const SuperTrunfo = styled.img`
  width: 6rem;
  position: absolute;
  left: -1.5rem;
  top: -2.5rem;
`;

export const Background = styled.img`
  width: 100%;
  border-top: 0;
`;

export const Pokemon = styled.img`
  width: 7rem;
  position: absolute;
  top: 1rem;
  right: 0;
  filter: drop-shadow(0px 3px ${color.blueShadow});
`;
