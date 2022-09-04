import styled from 'styled-components/macro';
import variables from '../../helpers/styles/variables';

const { color } = variables;

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
`;

export const Image = styled.img`
  width: 2rem;
`;

export const CopyrightMe = styled.div`
  color: ${color.yellow};
`;

export const CopyrightNintendo = styled.div`
  color: ${color.lightBlue};
  font-size: 1rem;
`;
