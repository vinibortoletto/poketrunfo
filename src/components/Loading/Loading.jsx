import React from 'react';
import pokeballAnimation from '../../images/pokeball.gif';
import * as S from './Loading.style';

export default class Loading extends React.Component {
  render() {
    return (
      <S.Container>

        <p>Capturando Pokémons...</p>
        <img src={pokeballAnimation} alt="Uma pokebola girando" />
      </S.Container>
    );
  }
}
