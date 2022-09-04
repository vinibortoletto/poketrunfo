import variables from '../variables';

const { color } = variables;

export const coloredContainer = (borderWidth, mainColor, shadowColor, padding) => (
  `
    background-color: ${color[mainColor]};
    border-bottom: ${borderWidth}px solid ${color[shadowColor]};
    border-left: ${borderWidth / 2}px solid ${color[shadowColor]};
    border-right: ${borderWidth / 2}px solid ${color[shadowColor]};
    padding: ${padding}rem;
  `
);
