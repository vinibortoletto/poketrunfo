import vars from './variables';

export const coloredContainer = (borderWidth, mainColor, shadowColor, padding) => (
  `
    background-color: ${vars.color[mainColor]};
    border-bottom: ${borderWidth}px solid ${vars.color[shadowColor]};
    border-left: ${borderWidth / 2}px solid ${vars.color[shadowColor]};
    border-right: ${borderWidth / 2}px solid ${vars.color[shadowColor]};
    padding: ${padding}rem;
  `
);
