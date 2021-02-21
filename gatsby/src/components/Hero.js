import React from 'react';
import styled from 'styled-components';
import breakpoints from '../utils/breakpoints';

import hero from '../assets/images/hero.jpg';

const HeroStyles = styled.section`
  position: relative;
  width: 100%;
`;

const HeroImage = styled.div`
  width: 100%;
  height: 75vh;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
  background: url(${hero}) no-repeat center/cover;

  @media (orientation: portrait) {
    height: 55vh;
  }
`;

const Callout = styled.div`
  position: absolute;
  right: var(--spacing-xs);
  bottom: var(--spacing-xs);
  padding: 0.5rem 1rem;
  color: var(--color-white);
  background-color: var(--color-primary);
  transform: rotate(2deg);
  z-index: 1;

  ${breakpoints.small`
    right: var(--spacing-s);
    bottom: var(--spacing-xs);
    padding: 0.75rem 1.5rem;
  `};

  ${breakpoints.medium`
    right: var(--spacing);
    bottom: var(--spacing-s);
  `};

  ${breakpoints.large`
    right: var(--spacing-l);
    bottom: var(--spacing);
    padding: 1rem 2rem;
  `};

  ${breakpoints.xlarge`
    bottom: var(--spacing-l);
  `};

  h1 {
    display: flex;
    align-items: center;
    font-size: var(--font-size-l);
    margin-bottom: var(--spacing-xs);

    ${breakpoints.medium`
      font-size: var(--font-size-xxl);
      `};

    ${breakpoints.large`
      margin-bottom: var(--spacing-s);
    `};

    img {
      width: 16px;
      margin-right: var(--spacing-s);

      ${breakpoints.small`
        width: var(--spacing);
      `};

      ${breakpoints.large`
        width: var(--spacing-l);
        margin-right: var(--spacing);
      `};
    }
  }

  p {
    font-size: var(--font-size);
    font-weight: var(--font-weight-light);
    line-height: var(--line-height-s);
    text-align: right;
    margin: 0;

    ${breakpoints.medium`
      font-size: var(--font-size-l);
    `};
  }
`;

export default function Hero() {
  return (
    <HeroStyles>
      <HeroImage />

      <Callout>
        <h1>
          Komm ins
          <br />
          #teamherzkraft
        </h1>
        <p>#yogamitnadine</p>
      </Callout>
    </HeroStyles>
  );
}
