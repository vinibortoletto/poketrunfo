// Libs
import React from 'react';

// Images
import pokeballAnimation from '../../images/pokeball.gif';

// Styles
import * as S from './Loading.style';

export default function Loading() {
  return (
    <S.Container>
      <p>Capturando Pokémons...</p>
      <img src={pokeballAnimation} alt="Uma pokebola girando" />
    </S.Container>
  );
}
