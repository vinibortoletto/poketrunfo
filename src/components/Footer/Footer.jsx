import React from 'react';

import githubLogo from '../../images/logos/github.png';
import linkedinLogo from '../../images/logos/linkedin.png';
import viniLogo from '../../images/logos/vini.png';

import * as S from './Footer.style';

export default class Footer extends React.Component {
  render() {
    return (
      <S.Footer>
        <S.Socials>
          <a href="https://github.com/vinibortoletto">
            <S.Image src={githubLogo} alt="github logo" />
          </a>

          <a href="https://linkedin.com/i/vinicius-bortoletto">
            <S.Image src={linkedinLogo} alt="linkedin logo" />
          </a>

          <a href="https://vinibortoletto.netlify.app/">
            <S.Image src={viniLogo} alt="vinicius bortoletto logo" />
          </a>
        </S.Socials>

        <S.CopyrightMe>
          Desenvolvido por Vinicius Bortoletto
        </S.CopyrightMe>

        <S.CopyrightNintendo>
          Direitos de imagens reservados à Nintendo
        </S.CopyrightNintendo>
      </S.Footer>
    );
  }
}
