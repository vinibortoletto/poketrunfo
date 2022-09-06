import styled from 'styled-components/macro';
import { textShadow } from '../../helpers/styles/mixins/textShadow';
import variables from '../../helpers/styles/variables';

const { color } = variables;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  width:100%;
  padding: 1rem;
  margin-bottom: 1rem;
  
  background-color: ${color.lightBlue};
  color: ${color.darkBlue};
  ${textShadow('lightBlueShadow')}

  border-left: 3px solid ${color.lightBlueShadow};
  border-right: 3px solid ${color.lightBlueShadow};
  border-bottom: 5px solid ${color.lightBlueShadow};

  &:active {
    border: 3px solid ${color.lightBlue};
    border-bottom: 0;
  }
`;
