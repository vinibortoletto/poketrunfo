// Libs
import React from 'react';
import { string } from 'prop-types';

// Styles
import * as S from './Title.style';

export default function Title({ text }) {
  return (
    <S.Title>{text}</S.Title>
  );
}

Title.propTypes = {
  text: string.isRequired,
};
