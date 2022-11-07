// Libs
import React from 'react';
import { arrayOf, shape } from 'prop-types';

// Styles
import * as S from './CardTemplate.style';
import cardBackgroundImage from '../../../images/card-background.png';
import superTrunfoImage from '../../../images/super-trunfo.png';

export default function CardTemplate({ newCard, cardStats }) {
  const backgroundAltMessage = 'uma floresta, na frente o tronco de uma árvore no tom marrom, no fundo outras árvores azuis e uma grande ponte';

  return (
    <S.YellowContainer>
      <S.BlueContainer>
        <S.Content>
          <S.Title>{newCard.name}</S.Title>

          <S.Illustrations>
            {newCard.trunfo && (
              <S.SuperTrunfo src={superTrunfoImage} alt="super trunfo" />
            )}
            <S.Background src={cardBackgroundImage} alt={backgroundAltMessage} />
            <S.Pokemon src={newCard.image} alt={newCard.name} />
          </S.Illustrations>

          <S.StatList>
            {cardStats.map(({ id, name, points }) => (
              <S.StatItem key={id}>
                <S.StatName>{name}</S.StatName>
                <S.StatPoints>{points}</S.StatPoints>
              </S.StatItem>
            ))}
          </S.StatList>

          <S.Type type={newCard.type}>
            {newCard.type}
          </S.Type>

        </S.Content>
      </S.BlueContainer>
    </S.YellowContainer>
  );
}

CardTemplate.propTypes = {
  cardStats: arrayOf(shape({})).isRequired,
  newCard: shape({}).isRequired,
};
