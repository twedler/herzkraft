import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import breakpoints from '../utils/breakpoints';

import LogoFull from '../assets/svg/logo.svg';
import LogoIcon from '../assets/svg/logo-icon.svg';
import LogoStacked from '../assets/svg/logo-stacked.svg';

const LogoStyles = styled.div`
  width: 100%;
  max-width: 80vw;

  a {
    color: var(--color-black);
  }

  svg {
    width: 100%;
    height: auto;
  }

  .logo--full {
    display: none;

    ${breakpoints.large`
      display: block;
    `};
  }

  .logo--stacked {
    ${breakpoints.large`
      display: none;
    `};
  }
`;

export default function Logo({ icon = false }) {
  return (
    <LogoStyles className="logo">
      <Link to="/">
        {icon ? (
          <LogoIcon />
        ) : (
          <>
            <LogoFull className="logo--full" />
            <LogoStacked className="logo--stacked" />
          </>
        )}
      </Link>
    </LogoStyles>
  );
}
