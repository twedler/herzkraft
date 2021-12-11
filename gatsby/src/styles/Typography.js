import { createGlobalStyle } from 'styled-components';

import fontPrimary from '../assets/fonts/corporative-book.woff';
import fontPrimaryBold from '../assets/fonts/corporative-bold.woff';
import fontSecondary from '../assets/fonts/arquitecta.woff';
import fontSecondaryBold from '../assets/fonts/arquitecta-bold.woff';
import fontSecondaryHeavy from '../assets/fonts/arquitecta-heavy.woff';

const Typography = createGlobalStyle`
@font-face {
  font-family: Corporative;
  src: url(${fontPrimary});
  font-display: swap;
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: Corporative;
  src: url(${fontPrimaryBold});
  font-display: swap;
  font-style: normal;
  font-weight: 700;
}

@font-face {
  font-family: Arquitecta;
  src: url(${fontSecondary});
  font-display: swap;
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: Arquitecta;
  src: url(${fontSecondaryBold});
  font-display: swap;
  font-style: normal;
  font-weight: 700;
}

@font-face {
  font-family: Arquitecta;
  src: url(${fontSecondaryHeavy});
  font-display: swap;
  font-style: normal;
  font-weight: 900;
}

/* Base */
h1, h2, h3, h4, h5, h6, p {
  margin-top: 0;
  font-size: var(--font-size);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-heavy);
  line-height: var(--line-height-s);
  color: var(--font-color);
  margin-bottom: var(--spacing);

  .is-page--latenight & {
    color: var(--font-white);
  }
}

h1, .h1 {
  font-size: var(--font-size-xxl);
  color: var(--color-white);
}

h2, .h2 {
  font-size: var(--font-size-xxl);
  text-align: center;
}

h3, .h3 {
  font-size: var(--font-size-xl);
}

h4, .h4 {
  font-size: var(--font-size-l);
}

h6, .h6 {
  font-weight: normal;
  font-style: italic;
}

p {
  margin-bottom: var(--spacing);
  letter-spacing: 0.04em;

  &:last-child {
    margin-bottom: 0;
  }
}

.lead {
  text-align: center;
}

.nowrap {
  white-space: nowrap;
}

.highlight {
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}

small {
  font-size: var(--font-size-s);
}


/* Links */
a, .link {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--duration-s);

  &:hover {
    text-decoration: underline;
  }

  &.neutral {
    font-weight: var(--font-weight-bold);
    text-decoration: underline;
    color: var(--font-color);

    .is-page--latenight & {
      color: var(--color-white);
    }
  }
}

  /* mark, .mark {
    background: var(--secondary);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  } */

`;

export default Typography;
