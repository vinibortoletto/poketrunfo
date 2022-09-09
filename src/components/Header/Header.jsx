import React from 'react';
import Logo from '../Logo/Logo';
import * as S from './Header.style';

export default class Header extends React.Component {
  render() {
    return (
      <S.Header>
        <Logo />
      </S.Header>
    );
  }
}
