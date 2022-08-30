import React from 'react';
import pokeTrunfoLogo from '../../images/poke-trunfo-logo.png';
import * as Styled from './Logo.style';

export default class Logo extends React.Component {
  render() {
    const altMessage = 'O texto PokeTrunfo nas cores amarelo e azul.';

    return (
      <Styled.Image src={pokeTrunfoLogo} alt={altMessage} />
    );
  }
}
