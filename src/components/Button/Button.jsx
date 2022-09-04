import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

import * as Styled from './Button.style';

export default class Button extends React.Component {
  render() {
    const { title, type, path } = this.props;

    return (
      <Styled.Button type={type}>
        <Link to={path}>
          <Styled.YellowContainer>
            <Styled.BlueContainer>
              { title }
            </Styled.BlueContainer>
          </Styled.YellowContainer>
        </Link>
      </Styled.Button>
    );
  }
}

Button.propTypes = {
  title: string.isRequired,
  type: string.isRequired,
  path: string.isRequired,
};
