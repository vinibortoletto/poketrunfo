import { string, shape, arrayOf } from 'prop-types';
import React from 'react';
import closeIcon from '../../images/close-icon.png';
import Illustration from './Illustration/Illustration';
import StatItem from './StatItem/StatItem';
import * as S from './Card.style';

export default class Card extends React.Component {
  render() {
    const {
      sprites: {
        other: {
          'official-artwork': {
            front_default: pokemonImage,
          },
        },
      },
      name: pokemonName,
      stats,
      types,
    } = this.props;

    const { name: pokemonType } = types[0].type;

    return (
      <S.YellowContainer>
        <S.BlueContainer>
          <S.Content>
            <S.RemoveButton>
              <img src={closeIcon} alt={`imagem do pokemon ${pokemonName}`} />
            </S.RemoveButton>

            <S.Title>{pokemonName}</S.Title>

            <Illustration pokemonImage={pokemonImage} />

            <S.StatList>
              {stats.map(({ base_stat: statPoints, stat }) => (
                !stat.name.includes('special') && (
                <StatItem
                  key={stat.name}
                  statName={stat.name}
                  statPoints={statPoints}
                />
                )))}
            </S.StatList>

            <S.Type type={pokemonType}>
              {pokemonType}
            </S.Type>

          </S.Content>
        </S.BlueContainer>
      </S.YellowContainer>
    );
  }
}

Card.propTypes = {
  sprites: shape({}).isRequired,
  name: string.isRequired,
  stats: arrayOf(shape({})).isRequired,
  types: arrayOf(shape({})).isRequired,
};
