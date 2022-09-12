import styled from 'styled-components/macro';
import variables from '../../../helpers/styles/variables';
import { coloredContainer } from '../../../helpers/styles/mixins/coloredContainer';

const { color } = variables;

export const Container = styled.div`
  ${coloredContainer(5, 'white', 'whiteShadow', 0.2)};
  margin-bottom: 2rem;
  position: relative;
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
