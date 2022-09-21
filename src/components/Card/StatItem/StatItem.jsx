import { string } from 'prop-types';
import React from 'react';
import * as S from './StatItem.style';

export default class StatItem extends React.Component {
  render() {
    const { statName, statPoints } = this.props;

    return (
      <S.StatItem>
        <S.StatName>{statName}</S.StatName>
        <S.StatPoints>{statPoints}</S.StatPoints>
      </S.StatItem>
    );
  }
}

StatItem.propTypes = {
  statName: string.isRequired,
  statPoints: string.isRequired,
};
