import React from 'react';
import { string } from 'prop-types';
import * as Styled from './Title.style';

export default class Title extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <Styled.Title>{text}</Styled.Title>
    );
  }
}

Title.propTypes = {
  text: string.isRequired,
};
