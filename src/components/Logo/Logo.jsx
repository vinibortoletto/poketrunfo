import React from 'react';
import { Link } from 'react-router-dom';
import pokeTrunfoLogo from '../../images/poke-trunfo-logo.png';
import * as S from './Logo.style';

export default class Logo extends React.Component {
  render() {
    const altMessage = 'O texto PokeTrunfo nas cores amarelo e azul.';

    return (
      <Link to="/">
        <S.Image src={pokeTrunfoLogo} alt={altMessage} />
      </Link>
    );
  }
}
