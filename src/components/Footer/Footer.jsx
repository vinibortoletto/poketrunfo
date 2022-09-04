import React from 'react';

import githubLogo from '../../images/logos/github.png';
import linkedinLogo from '../../images/logos/linkedin.png';
import viniLogo from '../../images/logos/vini.png';

import * as Styled from './Footer.style';

export default class Footer extends React.Component {
  render() {
    return (
      <Styled.Footer>
        <Styled.Socials>
          <a href="https://github.com/vinibortoletto">
            <img src={githubLogo} alt="github logo" />
          </a>

          <a href="https://linkedin.com/i/vinicius-bortoletto">
            <img src={linkedinLogo} alt="linkedin logo" />
          </a>

          <a href="https://vinibortoletto.netlify.app/">
            <img src={viniLogo} alt="vinicius bortoletto logo" />
          </a>
        </Styled.Socials>

        <Styled.CopyrightMe>
          Desenvolvido por Vinicius Bortoletto
        </Styled.CopyrightMe>

        <Styled.CopyrightNintendo>
          Direitos de imagens reservados à Nintendo
        </Styled.CopyrightNintendo>
      </Styled.Footer>
    );
  }
}
