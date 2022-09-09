import React from 'react';
import { string } from 'prop-types';
import * as S from './Title.style';

export default class Title extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <S.Title>{text}</S.Title>
    );
  }
}

Title.propTypes = {
  text: string.isRequired,
};
