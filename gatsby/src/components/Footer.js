import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Menu, { MenuItemsHorizontal } from './Menu';
import breakpoints from '../utils/breakpoints';
import Logo from './Logo';

const FooterStyles = styled.footer`
  padding: var(--spacing);

  ${breakpoints.medium`
    padding: var(--spacing-xs) var(--spacing);
  `};

  .logo {
    width: var(--spacing-xl);
    margin: 0 auto;
  }

  ${MenuItemsHorizontal} {
    display: block;

    ${breakpoints.small`
      display: inline-flex;
    `};
  }
`;

const MenuBar = styled.div`
  margin-top: var(--spacing-s);

  ${breakpoints.large`
    display: flex;
    justify-content: center;
    align-items: center;
  `};

  ${Menu} {
    text-align: center;
  }

  p {
    font-family: var(--font-secondary);
    text-align: center;
    margin: 0;
    order: -2;
  }
`;

const Separator = styled.span`
  display: none;
  margin: 0 var(--spacing-s) 0 var(--spacing);
  order: -1;

  ${breakpoints.large`
    display: inline-block;
  `};
`;

const navItems = [
  {
    id: '1',
    text: 'AGB',
    url: '/agb',
  },
  {
    id: '2',
    text: 'Datenschutz',
    url: '/datenschutz',
  },
  {
    id: '3',
    text: 'Impressum',
    url: '/impressum',
  },
];

export default function Footer() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `);

  const {
    author: { name },
  } = siteMetadata;

  return (
    <FooterStyles>
      <Logo icon />

      <MenuBar>
        <Menu>
          <MenuItemsHorizontal>
            {navItems.map((item) => (
              <li key={`footerItem${item.id}`}>
                <Link to={item.url}>{item.text}</Link>
              </li>
            ))}
          </MenuItemsHorizontal>
        </Menu>

        <Separator>&mdash;</Separator>

        <p>
          &copy; {name} {new Date().getFullYear()}. All rights reserved.
        </p>
      </MenuBar>
    </FooterStyles>
  );
}
