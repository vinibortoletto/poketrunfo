import React from 'react';
import { string, func } from 'prop-types';
import * as S from './SelectInput.style';

const POKEMON_TYPES = [
  'normal',
  'fire',
  'water',
  'grass',
  'electric',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dark',
  'dragon',
  'steel',
  'fairy',
];

export default class SelectInput extends React.Component {
  render() {
    const { cardType, handleInputChange } = this.props;

    return (
      <S.Container>
        <S.Label htmlFor="cardType">
          Tipo:
          <S.Select
            name="cardType"
            id="cardType"
            value={cardType}
            onChange={handleInputChange}
          >
            {POKEMON_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </S.Select>
        </S.Label>
      </S.Container>
    );
  }
}

SelectInput.propTypes = {
  cardType: string.isRequired,
  handleInputChange: func.isRequired,
};
