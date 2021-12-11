import { createGlobalStyle } from 'styled-components';

const DesignTokens = createGlobalStyle`
  :root {

    // Colors
    // ------

    --color-primary: #00BDD5;
    --color-primary-light: #CCF2F7;
    --color-primary-dark: #007A8A;

    /* --color-secondary: #; */
    /* --color-secondary-light: #; */
    /* --color-secondary-dark: #; */

    --color-accent: #E040FC;
    /* --color-accent-light: #; */
    --color-accent-dark: #D80EFB;

    --color-success: #3adb76;
    --color-warning: #ffae00;
    --color-alert: #cc4b37;

    --color-black: #020202;
    --color-latenight: #0a1327;
    --color-dark-gray: #333;
    --color-gray: #bbb;
    --color-light-gray: #ddd;
    --color-white: #fff;

    --color-background: var(--color-white);
    --color-background-dark: var(--color-black);

    // Typography
    // ----------

    --font-color: var(--color-black);
    --font-color-light: var(--color-white);

    --font-stack: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
    --font-primary: 'Corporative';
    --font-secondary: 'Arquitecta';

    --font-size-base: 16px;
    --font-scale: 1.25;

    --font-size-s: calc(var(--font-size) / var(--font-scale));
    --font-size: var(--font-size-base);
    --font-size-l: calc(var(--font-size) * var(--font-scale));
    --font-size-xl: calc(var(--font-size-l) * var(--font-scale));
    --font-size-xxl: calc(var(--font-size-xl) * var(--font-scale));
    --font-size-xxxl: calc(var(--font-size-xxl) * var(--font-scale));
    --font-size-xxxxl: calc(var(--font-size-xxxl) * var(--font-scale));

    --line-height-s: 1.2;
    --line-height: 1.88;

    --font-weight-light: 200;
    --font-weight: 400;
    --font-weight-bold: 700;
    --font-weight-heavy: 900;


    // Spacing
    // -------

    --baseline: calc(var(--font-size-base) * var(--line-height));

    --spacing-xs: calc(var(--baseline) / 4);
    --spacing-s: calc(var(--baseline) / 2);
    --spacing: var(--baseline);
    --spacing-l: calc(var(--baseline) * 2);
    --spacing-xl: calc(var(--baseline) * 3);
    --spacing-xxl: calc(var(--baseline) * 4);
    --spacing-xxxl: calc(var(--baseline) * 5);
    --spacing-xxxxl: calc(var(--baseline) * 6);


    // Misc
    // ----

    --duration-s: 100ms;
    --duration: 200ms;
    --duration-l: 500ms;

    --border-radius-s: 4px;
    --border-radius: 12px;
    --border-radius-l: 24px;

    --shadow-color: 0, 0, 0;
    --shadow-s: 0 1px 4px 0px rgba(var(--shadow-color), 0.1);
    --shadow: 3px 3px 6px 0px rgba(var(--shadow-color), 0.2);
    --shadow-l: 4px 4px 8px 0px rgba(var(--shadow-color), 0.2);

    --z-index-s: -1;
    --z-index: 1;
    --z-index-l: 3;
    --z-index-xl: 6;
    --z-index-xxl: 9;
}

@media (min-width: 30em) { // 480px @ 16px
	:root {}
}

@media (min-width: 48em) { // 768px @ 16px
  :root {
    --font-size: 18px;
    --font-scale: 1.333;
	}
}

@media (min-width: 64em) { // 1024px @ 16px
	:root {}
}

@media (min-width: 80em) { // 1280px @ 16px
	:root {
    --font-size: 20px;
  }
}

`;

export default DesignTokens;
