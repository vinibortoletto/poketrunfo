import React from 'react';
import {
  string, shape, arrayOf, func, number, bool,
} from 'prop-types';
import closeIcon from '../../images/close-icon.png';
import Illustration from './Illustration/Illustration';
import StatItem from './StatItem/StatItem';
import * as S from './Card.style';

export default class Card extends React.Component {
  render() {
    const {
      id,
      name,
      image,
      stats,
      trunfo,
      type,
      removeCard,
      selectCardToPlay,
      selectedCardToPlay,
    } = this.props;

    const { pathname } = window.location;
    const hasBorder = selectedCardToPlay.id === id && pathname !== '/game';

    return (
      <S.YellowContainer
        role="button"
        onClick={pathname === '/pre-game' ? () => selectCardToPlay(id) : () => {}}
        hasBorder={hasBorder}
        pathname={pathname}
      >
        <S.BlueContainer>
          <S.Content>
            <S.RemoveButton onClick={() => removeCard(id)}>
              <img src={closeIcon} alt={`imagem do pokemon ${name}`} />
            </S.RemoveButton>

            <S.Title>{name}</S.Title>

            <Illustration image={image} trufo={trunfo} />

            <S.StatList>
              {stats.map((stat) => (
                <StatItem
                  key={stat.id}
                  statName={stat.name}
                  statPoints={stat.points.toString()}
                />
              ))}
            </S.StatList>

            <S.Type type={type}>
              {type}
            </S.Type>

          </S.Content>
        </S.BlueContainer>
      </S.YellowContainer>
    );
  }
}

Card.defaultProps = {
  id: 0,
  name: '',
  image: '',
  stats: [],
  trunfo: false,
  type: '',
  removeCard: () => {},
  selectCardToPlay: () => {},
  selectedCardToPlay: {},
};

Card.propTypes = {
  id: number,
  name: string,
  image: string,
  stats: arrayOf(shape({})),
  trunfo: bool,
  type: string,
  removeCard: func,
  selectCardToPlay: func,
  selectedCardToPlay: shape({}),
};
