import React from 'react';
import * as S from './SeparatorBars.style';

export default class SeparatorBars extends React.Component {
  render() {
    return (
      <S.Container>
        <S.Bar />
        <S.Bar />
        <S.Bar />
      </S.Container>
    );
  }
}
