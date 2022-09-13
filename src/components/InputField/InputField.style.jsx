import styled from 'styled-components/macro';
import variables from '../../helpers/styles/variables';

const { color } = variables;

export const Label = styled.label`
  color: ${color.babyBlue};
`;

export const Input = styled.input`
  border: 1px solid ${color.yellow};
  color: ${color.yellow};
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
`;
