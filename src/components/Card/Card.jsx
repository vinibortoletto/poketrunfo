// Libs
import React, { useContext } from 'react';
import { shape } from 'prop-types';
import { PokemonsContext } from '../../contexts/PokemonsContext';

// Components
import Illustration from './Illustration/Illustration';
import StatItem from './StatItem/StatItem';

// Styles
import * as S from './Card.style';
import closeIcon from '../../images/close-icon.png';

export default function Card({ card }) {
  const {
    pathname,
    selectedCardToPlay,
    selectCardToPlay,
    removeCard,
  } = useContext(PokemonsContext);

  const hasBorder = selectedCardToPlay.id === card.id && pathname !== '/game';

  return (
    <S.YellowContainer
      role="button"
      onClick={pathname === '/pre-game' ? () => selectCardToPlay(card.id) : () => {}}
      hasBorder={hasBorder}
      pathname={pathname}
    >
      <S.BlueContainer>
        <S.Content>
          <S.RemoveButton onClick={() => removeCard(card.id)}>
            <img src={closeIcon} alt={`imagem do pokemon ${card.name}`} />
          </S.RemoveButton>

          <S.Title>{card.name}</S.Title>

          <Illustration image={card.image} trufo={card.trunfo} />

          <S.StatList>
            {card.stats.map((stat) => (
              <StatItem
                key={stat.id}
                statName={stat.name}
                statPoints={stat.points.toString()}
              />
            ))}
          </S.StatList>

          <S.Type type={card.type}>
            {card.type}
          </S.Type>

        </S.Content>
      </S.BlueContainer>
    </S.YellowContainer>
  );
}

Card.propTypes = {
  card: shape({}).isRequired,
};
