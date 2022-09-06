import React from 'react';
import * as S from './Card.style';
import cardBackground from '../../images/card-background.png';
import pikachu from '../../images/pikachu.png';

export default class Card extends React.Component {
  render() {
    return (
      <S.YellowContainer>
        <S.BlueContainer>
          <S.Content>
            <S.Title>Pikachu</S.Title>
            <S.ImagesContainer>
              <S.Background src={cardBackground} alt="uma floresta, na frente o tronco de uma árvore no tom marrom, no fundo outras árvores azuis e uma grande ponte" />
              <S.Pokemon src={pikachu} alt="" />
            </S.ImagesContainer>

            <S.StatList>
              <S.StatItem>
                <S.StatName>HP</S.StatName>
                <S.StatPoints>100</S.StatPoints>
              </S.StatItem>

              <S.StatItem>
                <S.StatName>HP</S.StatName>
                <S.StatPoints>100</S.StatPoints>
              </S.StatItem>

              <S.StatItem>
                <S.StatName>HP</S.StatName>
                <S.StatPoints>100</S.StatPoints>
              </S.StatItem>

              <S.StatItem>
                <S.StatName>HP</S.StatName>
                <S.StatPoints>100</S.StatPoints>
              </S.StatItem>
            </S.StatList>

            <S.Type>
              electric
            </S.Type>

          </S.Content>
        </S.BlueContainer>
      </S.YellowContainer>
    );
  }
}
