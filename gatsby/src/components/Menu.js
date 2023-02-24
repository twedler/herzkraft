import styled from 'styled-components';
import breakpoints from '../utils/breakpoints';

const Menu = styled.nav`
  /* display: flex;
  justify-content: center; */

  a {
    --menu-link-color: var(--color-black);

    font-family: var(--font-secondary);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-s);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--menu-link-color);
    padding: var(--spacing-xs);

    .is-page--latenight & {
      color: var(--color-white);

      &:hover {
        color: var(--color-primary);
      }
    }

    ${breakpoints.xlarge`
      padding: var(--spacing-xs) var(--spacing-s);
    `};

    &:hover {
      --menu-link-color: var(--color-primary);
      text-decoration: none;
    }
  }
`;

const MenuItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItemsVertical = styled(MenuItems)`
  li {
    margin-bottom: var(--spacing);

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const MenuItemsHorizontal = styled(MenuItems)`
  display: inline-flex;
  justify-content: center;

  a {
    display: block;
  }
`;

export default Menu;
