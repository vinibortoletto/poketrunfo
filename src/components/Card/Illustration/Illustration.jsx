import React from 'react';
import cardBackground from '../../../images/card-background.png';
import pikachu from '../../../images/pikachu.png';
import * as S from './Illustration.style';

export default class Illustration extends React.Component {
  render() {
    return (
      <S.Container>
        <S.Background src={cardBackground} alt="uma floresta, na frente o tronco de uma árvore no tom marrom, no fundo outras árvores azuis e uma grande ponte" />
        <S.Pokemon src={pikachu} alt="" />
      </S.Container>
    );
  }
}
