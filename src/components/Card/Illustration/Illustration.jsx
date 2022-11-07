// Libs
import React from 'react';
import { string } from 'prop-types';

// Styles
import * as S from './Illustration.style';

// Images
import cardBackground from '../../../images/card-background.png';

export default function Illustration({ image }) {
  return (
    <S.Container>
      <S.Background src={cardBackground} alt="uma floresta, na frente o tronco de uma árvore no tom marrom, no fundo outras árvores azuis e uma grande ponte" />
      <S.Pokemon src={image} alt="" />
    </S.Container>
  );
}

Illustration.propTypes = {
  image: string.isRequired,
};
