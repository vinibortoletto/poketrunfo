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
    } = this.props;

    return (
      <S.YellowContainer>
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

Card.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  image: string.isRequired,
  stats: arrayOf(shape({})).isRequired,
  trunfo: bool.isRequired,
  type: string.isRequired,
  removeCard: func.isRequired,
};
