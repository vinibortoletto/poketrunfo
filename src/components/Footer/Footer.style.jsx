import styled from 'styled-components/macro';
import vars from '../../helpers/styles/variables';

export const Footer = styled.footer`
  text-align: center;
  margin-top: 10rem;
  margin-bottom: 2rem;
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;

  img {
    width: 2rem;
  }
`;

export const CopyrightMe = styled.div`
  color: ${vars.color.yellow};
`;

export const CopyrightNintendo = styled.div`
  color: ${vars.color.lightBlue};
  font-size: 1rem;
`;
