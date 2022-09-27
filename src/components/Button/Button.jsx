import React from 'react';
import {
  oneOfType, string, object, bool, func,
} from 'prop-types';

import * as S from './Button.style';

export default class Button extends React.Component {
  render() {
    const {
      type,
      children,
      disabled,
      pushNewRoute,
    } = this.props;
    const currentPath = window.location.pathname;

    return (
      <S.Button
        type={type}
        currentPath={currentPath}
        disabled={disabled}
        onClick={pushNewRoute}
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
Button.defaultProps = {
  disabled: false,
  pushNewRoute: () => {},
};

Button.propTypes = {
  type: string.isRequired,
  children: oneOfType([string, object]).isRequired,
  disabled: bool,
  pushNewRoute: func,
};
