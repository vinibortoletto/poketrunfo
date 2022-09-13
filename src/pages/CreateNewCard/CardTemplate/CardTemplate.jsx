import React from 'react';
import {
  bool, string, arrayOf, shape,
} from 'prop-types';
import cardBackgroundImage from '../../../images/card-background.png';
import superTrunfoImage from '../../../images/super-trunfo.png';
import * as S from './CardTemplate.style';

export default class CardTemplate extends React.Component {
  render() {
    const {
      cardName,
      cardImage,
      cardStats,
      cardType,
      cardTrunfo,
    } = this.props;

    const backgroundAltMessage = 'uma floresta, na frente o tronco de uma árvore no tom marrom, no fundo outras árvores azuis e uma grande ponte';

    return (
      <S.YellowContainer>
        <S.BlueContainer>
          <S.Content>
            <S.Title>{cardName}</S.Title>

            <S.Illustrations>
              {cardTrunfo && (
                <S.SuperTrunfo src={superTrunfoImage} alt="super trunfo" />
              )}
              <S.Background src={cardBackgroundImage} alt={backgroundAltMessage} />
              <S.Pokemon src={cardImage} alt={cardName} />
            </S.Illustrations>

            <S.StatList>
              {cardStats.map(({ id, name, points }) => (
                <S.StatItem key={id}>
                  <S.StatName>{name}</S.StatName>
                  <S.StatPoints>{points}</S.StatPoints>
                </S.StatItem>
              ))}
            </S.StatList>

            <S.Type type={cardType}>
              {cardType}
            </S.Type>

          </S.Content>
        </S.BlueContainer>
      </S.YellowContainer>
    );
  }
}

CardTemplate.propTypes = {
  cardName: string.isRequired,
  cardImage: string.isRequired,
  cardStats: arrayOf(shape({})).isRequired,
  cardType: string.isRequired,
  cardTrunfo: bool.isRequired,
};
