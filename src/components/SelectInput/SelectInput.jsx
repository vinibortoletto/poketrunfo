// Libs
import React from 'react';
import { string, func } from 'prop-types';

// Styles
import * as S from './SelectInput.style';

// Constants
import { POKEMON_TYPES } from '../../constants/constants';

export default function SelectInput({ cardType, handleInputChange }) {
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

SelectInput.propTypes = {
  cardType: string.isRequired,
  handleInputChange: func.isRequired,
};
