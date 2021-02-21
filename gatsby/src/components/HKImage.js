import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import breakpoints from '../utils/breakpoints';

const HKImageStyles = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;

  &.is-inline {
    margin-top: var(--spacing-s);
    margin-bottom: var(--spacing-l);

    ${breakpoints.medium`
      max-width: 35vw;
      float: right;
      margin-left: var(--spacing);
    `};
  }

  > span {
    position: absolute;
    top: var(--spacing-xs);
    left: var(--spacing-s);
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--color-primary);
    transform: rotate(4deg);

    ${breakpoints.large`
      top: var(--spacing-s);
      left: var(--spacing);
    `};
  }

  .gatsby-image-wrapper {
    position: relative;
    width: 100%;
    transform: rotate(3deg);
    z-index: var(--z-index);
  }
`;

export default function HKImage({ src = '', alt = '', isInline = false }) {
  return (
    <HKImageStyles className={`${isInline ? ' is-inline' : ''}`}>
      <span />
      <Img fluid={src} alt={alt} />
    </HKImageStyles>
  );
}
