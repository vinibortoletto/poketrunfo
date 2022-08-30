import React from 'react';
import Logo from '../Logo/Logo';
import * as Styled from './Header.style';

export default class Header extends React.Component {
  render() {
    return (
      <Styled.Header>
        <Logo />
      </Styled.Header>
    );
  }
}
