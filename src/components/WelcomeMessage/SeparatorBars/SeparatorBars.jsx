import React from 'react';
import * as Styled from './SeparatorBars.style';

export default class SeparatorBars extends React.Component {
  render() {
    return (
      <Styled.Container>
        <Styled.Bar />
        <Styled.Bar />
        <Styled.Bar />
      </Styled.Container>
    );
  }
}
