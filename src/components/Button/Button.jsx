import React from 'react';
import {
  oneOfType, string, object,
} from 'prop-types';

import * as S from './Button.style';

export default class Button extends React.Component {
  render() {
    const { type, children } = this.props;
    const currentPath = window.location.pathname;

    return (
      <S.Button
        type={type}
        currentPath={currentPath}
      >
        <S.YellowContainer>
          <S.BlueContainer>
            {children}
          </S.BlueContainer>
        </S.YellowContainer>
      </S.Button>
    );
  }
}

Button.propTypes = {
  type: string.isRequired,
  children: oneOfType([string, object]).isRequired,
};
