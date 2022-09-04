import vars from './variables';

export const createTextShadow = (shadowColor) => (
  `text-shadow: 0px 2px 3px ${vars.color[shadowColor]};`
);
