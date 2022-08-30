import styled from 'styled-components/macro';
import { coloredContainer } from '../../../helpers/styles/coloredContainer';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

export const Bar = styled.div`
  ${coloredContainer(5, 'white', 'whiteShadow', 0)};
  width: 100%;
  height: 1.5rem;
`;
