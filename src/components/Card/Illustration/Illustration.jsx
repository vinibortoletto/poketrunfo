/* eslint-disable react/prop-types */

import React from 'react';
import cardBackground from '../../../images/card-background.png';
import * as S from './Illustration.style';

export default class Illustration extends React.Component {
  render() {
    const { pokemonImage } = this.props;

    return (
      <S.Container>
        <S.Background src={cardBackground} alt="uma floresta, na frente o tronco de uma árvore no tom marrom, no fundo outras árvores azuis e uma grande ponte" />
        <S.Pokemon src={pokemonImage} alt="" />
      </S.Container>
    );
  }
}
