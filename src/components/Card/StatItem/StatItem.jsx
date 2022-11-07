// Libs
import { string } from 'prop-types';
import React from 'react';

// Styles
import * as S from './StatItem.style';

export default function StatItem({ statName, statPoints }) {
  return (
    <S.StatItem>
      <S.StatName>{statName}</S.StatName>
      <S.StatPoints>{statPoints}</S.StatPoints>
    </S.StatItem>
  );
}

StatItem.propTypes = {
  statName: string.isRequired,
  statPoints: string.isRequired,
};
