import styled from 'styled-components';
import breakpoints, { maxContentWidth } from '../utils/breakpoints';

const Section = styled.section`
  position: relative;
`;

export const ColoredSection = styled(Section)`
  color: var(--color-black);
`;

export const TextSection = styled(Section)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-heavy);
    line-height: var(--line-height-s);
    color: var(--font-color);
    margin-bottom: var(--spacing);
  }

  h1,
  h2 {
    text-align: center;
  }

  h1 {
    font-size: var(--font-size-xxxl);
  }

  h2 {
    font-size: var(--font-size-xxl);
  }

  h3 {
    font-size: var(--font-size-xl);
  }

  h4 {
    font-size: var(--font-size-l);
  }

  ul {
    list-style-position: inside;

    li {
      margin-bottom: var(--spacing-s);
    }
  }
`;

export const SectionContent = styled.div`
  position: relative;
  padding: var(--spacing-l) var(--spacing);

  ${breakpoints.medium`
    padding: var(--spacing-xl) var(--spacing-l);
  `};

  ${breakpoints.xxlarge`
    max-width: ${maxContentWidth};
    margin: 0 auto;
    padding-right: 0;
    padding-left: 0;
  `};

  &.collapsed {
    padding-top: var(--spacing-l);
  }
`;

export default Section;
