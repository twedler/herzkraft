import { createGlobalStyle } from 'styled-components';
import breakpoints from '../utils/breakpoints';

const GlobalStyles = createGlobalStyle`

/* Normalize */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Block Level Elements */
h1, h2, h3, h4, h5, h6, p, hr,
ol, ul, dl,
address, blockquote,
form,
figure,
iframe,
pre,
table {
  margin-top: 0;
  margin-bottom: var(--spacing);
	max-width: 100%;
}

/* HTML */
html {
  font-size: 100%;

  &[lang="de"] {
    hyphens: auto;

    ${breakpoints.small`
      hyphens: none;
    `};
  }
}

body {
  font-family: var(--font-primary), var(--font-stack);
  font-size: var(--font-size);
  /* font-size: clamp(1rem, 1.4vw, 1.125rem); */
  font-weight: var(--font-weight);
  line-height: var(--line-height);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: var(--font-color);
  background-color: var(--color-white);
}

/* Buttons */
  button, .button {
    --button-color: var(--color-white);
    --button-color-background: var(--color-accent);
    --button-color-border: var(--button-color-background);

    display: inline-flex;
    align-items: center;
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-heavy);
    font-size: var(--font-size);
    padding: var(--spacing-s) var(--spacing);
    color: var(--button-color);
    background: var(--button-color-background);
    border: 1px solid var(--button-color-border);
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: all var(--duration-s);

    &:hover {
      --button-color-background: var(--color-accent-dark);
      text-decoration: none;
    }

    &.outline {
      --button-color: var(--color-accent);
      --button-color-background: var(--color-white);
      --button-color-border: var(--button-color);

      &:hover {
        --button-color: var(--color-white);
        --button-color-background: var(--color-accent);
      }
    }

    &.accent {
      --button-color-background: var(--color-accent);

      &:hover {
        --button-color-background: var(--color-accent-dark);
      }
    }

    &.flat {
      padding: var(--spacing-s) var(--spacing);
      color: var(--color-primary);
      background: none;
      border: none;

      &:hover {
        text-decoration: underline;
      }
    }

    svg {
      margin-left: var(--spacing-s);
    }
  }

  /* Images */
  img {
    max-width: 100%;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* SVGs */
  svg {
    display: block;
    /* width: 100%;
    height: auto; */
    /* width: var(--spacing);
    height: var(--spacing); */
    fill: currentColor;
    transition: fill var(--duration-s);
  }

  /* Lists */


/* Misc */
  hr {
    width: 100%;
    height: 1px;
    background-color: var(--color-light-gray);
    border: 0;
  }


  /* Scrollbar Styles */
  /* body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--secondary) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--secondary) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  } */

`;

export default GlobalStyles;
