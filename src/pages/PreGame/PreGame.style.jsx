import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins/media';
import { textShadow } from '../../helpers/styles/mixins/textShadow';
import variables from '../../helpers/styles/variables';

const { color } = variables;

export const Section = styled.section`
  text-align: center;
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

export const CardList = styled.div`
  margin-top: 2rem;

  ${media(1024)} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(233px, 1fr));
    justify-items: center;
    gap: 1rem
  }
`;
