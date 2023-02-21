import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import breakpoints from '../utils/breakpoints';

import Preis1 from '../assets/svg/preis1.svg';
import Preis2 from '../assets/svg/preis2.svg';
import Preis3 from '../assets/svg/preis3.svg';
import Preis4 from '../assets/svg/preis4.svg';
import Preis5 from '../assets/svg/preis5.svg';

const icons = [<Preis1 />, <Preis2 />, <Preis3 />, <Preis4 />, <Preis5 />];

const PriceListStyles = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing);
  text-align: center;
  margin-bottom: var(--spacing);
  margin-top: var(--spacing-l);

  ${breakpoints.medium`
    grid-template-columns: 1fr 1fr;
    `};

  > div {
    padding: var(--spacing);
    background-color: var(--color-primary-light);

    .is-page--latenight & {
      background-color: transparent;
      box-shadow: inset 0 0 0 2px white;
    }

    &:last-child {
      :not(.is-page--latenight &):not(.is-page--yin &) {
        ${breakpoints.medium`
          grid-column: 1 / span 2;
        `};
      }

      > div {
        ${breakpoints.medium`
          display: flex;
          gap: var(--spacing-l);
          text-align: left;
          margin: 0 auto;
          max-width: 600px;
        `};

        svg {
          ${breakpoints.medium`
            margin-top: var(--spacing-s);
          `};
        }
      }
    }

    svg,
    h3,
    p:not(:last-child) {
      margin-bottom: var(--spacing-s);
    }

    svg {
      margin-left: auto;
      margin-right: auto;
      height: var(--spacing-xl);

      ${breakpoints.medium`
        height: var(--spacing-xxxl);
      `};
    }

    h3 {
      text-transform: uppercase;
    }

    p:not(:last-child) {
      line-height: 1.4;
    }
  }
`;

const Preis = styled.p`
  font-family: var(--font-secondary);
  font-size: var(--font-size-xxl);
  font-weight: var(--font-weight-heavy);
  line-height: var(--line-height-s);
  color: var(--color-primary-dark);

  .is-page--latenight & {
    color: var(--color-primary);
  }
`;

function SinglePrice({ index, price }) {
  return (
    <div>
      <div>
        {icons[index]}

        <div>
          <h3>{price.name}</h3>
          {price._rawDescription && (
            <BlockContent blocks={price._rawDescription} />
          )}

          <p>
            {price.description} <strong>{price.highlight}</strong>
          </p>
          <Preis>{price.price}</Preis>
        </div>
      </div>
    </div>
  );
}

export default function PriceList({ prices }) {
  return (
    <PriceListStyles>
      {prices.map((price, index) => (
        <SinglePrice key={`price${index}`} index={index} price={price} />
      ))}
    </PriceListStyles>
  );
}
