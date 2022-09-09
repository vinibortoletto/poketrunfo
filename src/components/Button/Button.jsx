import React from 'react';
import { Link } from 'react-router-dom';
import { string, shape } from 'prop-types';

import * as S from './Button.style';

export default class Button extends React.Component {
  render() {
    const {
      title,
      type,
      path,
    } = this.props;

    const currentPath = window.location.pathname;

    return (
      <S.Button type={type} currentPath={currentPath}>
        <Link to={path}>
          <S.YellowContainer>
            <S.BlueContainer>
              { title }
            </S.BlueContainer>
          </S.YellowContainer>
        </Link>
      </S.Button>
    );
  }
}

Button.propTypes = {
  title: string.isRequired,
  type: string.isRequired,
  path: string.isRequired,
};
