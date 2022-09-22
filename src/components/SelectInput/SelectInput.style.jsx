import styled from 'styled-components/macro';
import variables from '../../helpers/styles/variables';

const { color } = variables;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Label = styled.label`
  color: ${color.babyBlue};
  text-align: left;
`;

export const Select = styled.select`
  width: 25rem;
  display: block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem; 

  background-color: ${color.blueDark};
  border: 1px solid ${color.yellow};
  color: ${color.yellow};
`;
