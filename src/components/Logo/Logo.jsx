// Libs
import React from 'react';
import { Link } from 'react-router-dom';

// Images
import pokeTrunfoLogo from '../../images/poke-trunfo-logo.png';

// Styles
import * as S from './Logo.style';

export default function Logo() {
  const altMessage = 'O texto PokeTrunfo nas cores amarelo e azul.';

  return (
    <Link to="/">
      <S.Image
        src={pokeTrunfoLogo}
        alt={altMessage}
      />
    </Link>
  );
}
