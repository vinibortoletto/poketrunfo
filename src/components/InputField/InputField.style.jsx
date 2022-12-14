import styled from 'styled-components/macro';
import variables from '../../helpers/styles/variables';

const { color } = variables;

export const Container = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
`;

export const Label = styled.label`
  color: ${color.babyBlue};
  width: 25rem;
  text-align: left;
`;

export const Input = styled.input`
  width:100%;
  border: 1px solid ${color.yellow};
  color: ${color.yellow};
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  display: block;

  &[type='checkbox'] {
    width: auto;
    scale: 2;
    display: inline-block;
    margin: 3rem 1.5rem 0 0.3rem;
  }
`;
