import styled from 'styled-components/macro';
import { coloredContainer } from '../../helpers/styles/mixins/coloredContainer';
import { textShadow } from '../../helpers/styles/mixins/textShadow';
import variables from '../../helpers/styles/variables';

const { color } = variables;

export const YellowContainer = styled.div`
  ${coloredContainer(5, 'yellow', 'yellowShadow', 0.5)};
  width: 15rem;
  position: relative;
  margin: 1rem 0.5rem;
  
  ${({ pathname }) => pathname === '/pre-game' && `
    cursor: pointer;
  `}

  ${({ hasBorder }) => hasBorder && `
    scale: 1.03;
    border: 5px solid ${color.green};
  `}
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
