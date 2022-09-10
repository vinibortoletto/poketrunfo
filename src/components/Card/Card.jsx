import React from 'react';
import closeIcon from '../../images/close-icon.png';
import Illustration from './Illustration/Illustration';
import StatItem from './StatItem/StatItem';
import * as S from './Card.style';

export default class Card extends React.Component {
  render() {
    return (
      <S.YellowContainer>
        <S.BlueContainer>
          <S.Content>
            <S.RemoveButton>
              <img src={closeIcon} alt="um ícone em forma de x branco" />
            </S.RemoveButton>

            <S.Title>Pikachu</S.Title>

            <Illustration />

            <S.StatList>
              <StatItem statName="HP" statPoints="99" />
              <StatItem statName="Ataque" statPoints="99" />
              <StatItem statName="Defesa" statPoints="99" />
              <StatItem statName="Velocidade" statPoints="99" />
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
