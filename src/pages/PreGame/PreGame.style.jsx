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
  
  background-color: ${color.babyBlue};
  color: ${color.darkBlue};
  ${textShadow('babyBlueShadow')}

  border-left: 3px solid ${color.babyBlueShadow};
  border-right: 3px solid ${color.babyBlueShadow};
  border-bottom: 5px solid ${color.babyBlueShadow};

  &:active {
    border: 3px solid ${color.babyBlue};
    border-bottom: 0;
  }
`;
