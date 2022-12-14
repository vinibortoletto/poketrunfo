import vars from '../variables';

const { color } = vars;

export const textShadow = (shadowColor) => (
  `text-shadow: 0px 2px ${color[shadowColor]};`
);
