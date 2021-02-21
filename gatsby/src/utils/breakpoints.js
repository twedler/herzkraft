import { css } from 'styled-components';

const sizes = {
  small: 480,
  medium: 768,
  large: 1024,
  xlarge: 1200,
  xxlarge: 1440,
  max: 1920,
};

export const breakpointValue = (size) => `${sizes[size] / 16}em`;
export const narrowContentWidth = breakpointValue('medium');
export const maxContentWidth = breakpointValue('large');

const breakpoints = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default breakpoints;
