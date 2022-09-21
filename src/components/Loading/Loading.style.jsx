import styled from 'styled-components/macro';
import variables from '../../helpers/styles/variables';

const { color } = variables;

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: ${color.yellow};
  font-size: 3rem;
  
  img {
    width: 10rem;
  }
`;
