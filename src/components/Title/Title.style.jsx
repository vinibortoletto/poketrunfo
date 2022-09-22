import styled from 'styled-components/macro';
import variables from '../../helpers/styles/variables';

const { color } = variables;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: ${color.yellow};
  text-transform: uppercase;
  margin: 2rem 0;
`;
