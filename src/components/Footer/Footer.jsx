// Libs
import React from 'react';

// Images
import githubLogo from '../../images/logos/github.png';
import linkedinLogo from '../../images/logos/linkedin.png';
import viniLogo from '../../images/logos/vini.png';

// Constants
import { GITHUB_URL, LINKEDIN_URL, PORTFOLIO_URL } from '../../constants/constants';

// Styles
import * as S from './Footer.style';

export default function Footer() {
  return (
    <S.Footer>
      <S.Socials>
        <a href={GITHUB_URL}>
          <S.Image src={githubLogo} alt="github logo" />
        </a>

        <a href={LINKEDIN_URL}>
          <S.Image src={linkedinLogo} alt="linkedin logo" />
        </a>

        <a href={PORTFOLIO_URL}>
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
