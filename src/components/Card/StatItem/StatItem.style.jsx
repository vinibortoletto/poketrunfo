import styled from 'styled-components/macro';
import variables from '../../../helpers/styles/variables';
import { coloredContainer } from '../../../helpers/styles/mixins/coloredContainer';
import { textShadow } from '../../../helpers/styles/mixins/textShadow';

const { color } = variables;

export const StatItem = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0.5rem;
`;

export const StatName = styled.div`
  ${coloredContainer(5, 'blue', 'blueShadow', 0)};
  ${textShadow('blueShadow')};
  padding: 0 1rem;
  color: ${color.white};
`;

export const StatPoints = styled.div`
  ${coloredContainer(5, 'yellow', 'yellowShadow', 0)};
  ${textShadow('yellowShadow')};
  padding: 0 1rem;
  color: ${color.darkBlue};
  text-align: center;
`;
