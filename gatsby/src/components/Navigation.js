import { Link } from 'gatsby';
import React, { useState, useRef, useEffect, Component } from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import { BiX, BiMenu } from 'react-icons/bi';
import Menu, { MenuItemsHorizontal, MenuItemsVertical } from './Menu';
import breakpoints, { narrowContentWidth } from '../utils/breakpoints';
import Logo from './Logo';

const NavigationStyles = styled.div`
  position: sticky;
  top: 0;
  background-color: var(--color-white);
  box-shadow: var(--shadow-s);
  z-index: var(--z-index-xl);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-s);
  margin: 0 auto;

  .is-page--latenight & {
    background-color: transparent;
  }

  &.is-sticky {
    .is-page--latenight & {
      background-color: var(--color-latenight);
    }

    > .logo {
      flex: 0 0 var(--spacing-l);
      margin-right: var(--spacing);

      ${breakpoints.large`
        margin-right: var(--spacing-s);
      `};
    }
  }

  > .logo {
    flex: 0 0 0;
    transition: all var(--duration);

    a:hover {
      color: var(--color-primary);
    }
  }
`;

const DesktopNavigationStyles = styled(Menu)`
  display: none;

  ${breakpoints.large`
    display: flex;
    align-items: center;
    // max-width: ${narrowContentWidth};
  `};
`;

const MobileNavigationStyles = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  text-align: center;
  background-color: var(--color-white);
  z-index: var(--z-index-xxl);

  .is-page--latenight & {
    background-color: var(--color-latenight);
    color: var(--color-white);
  }

  .logo {
    width: 80px;
    margin: 0 auto var(--spacing-xl) auto;
  }

  ${Menu} {
    margin-bottom: var(--spacing);
  }

  ${MenuItemsHorizontal} {
    a {
      font-size: var(--font-size-xl);
      color: var(--font-color);

      &:hover {
        color: var(--color-primary);
      }

      .is-page--latenight & {
        color: var(--color-white);

        &:hover {
          color: var(--color-primary);
        }
      }
    }
  }
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 var(--spacing-s) 0 0;
  color: var(--color-black);
  background: none;
  border: none;

  .is-page--latenight & {
    color: var(--color-white);
  }

  ${breakpoints.large`
    display: none;
  `};

  svg {
    font-size: var(--font-size-xl);
    margin-right: var(--spacing-xs);
    margin-left: 0;
  }
`;

const CloseButton = styled.button`
  font-size: var(--font-size-xxl);
  color: var(--color-black);
  background: none;
  border: none;
  margin: 0 auto var(--spacing);

  .is-page--latenight & {
    color: var(--color-white);
  }

  svg {
    margin: 0;
  }
`;

const items = [
  {
    text: 'Herzkraft Yoga',
    url: '/#herzkraft-yoga',
  },
  {
    text: 'Yin Yoga',
    url: '/yin-yoga',
  },
  {
    text: 'Astro Yoga',
    url: '/astro-yoga',
  },
  {
    text: 'Termine',
    url: '/#termine',
  },
  {
    text: 'Preise',
    url: '/#preise',
  },
  {
    text: 'Blog',
    url: '/#blog',
  },
  {
    text: 'Nadine',
    url: '/#nadine',
  },
];

function ExternalLink({ to, children }) {
  return (
    <a href={to} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function ExternalLinks() {
  return (
    <MenuItemsHorizontal>
      <li>
        <ExternalLink to="https://www.instagram.com/nadineseuffert/">
          <FaInstagram />
        </ExternalLink>
      </li>
    </MenuItemsHorizontal>
  );
}

function DesktopNavigation() {
  return (
    <DesktopNavigationStyles>
      <MenuItemsHorizontal>
        {items.map((item, index) => (
          <li key={`navigationItem${index}`}>
            <Link to={item.url}>{item.text}</Link>
          </li>
        ))}
      </MenuItemsHorizontal>

      <ExternalLinks />
    </DesktopNavigationStyles>
  );
}

class MobileNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = { showNav: false };
    this.handleClick = this.handleClick.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      showNav: !prevState.showNav,
    }));
  }

  closeNav() {
    this.setState(() => ({
      showNav: false,
    }));
  }

  render() {
    const mobileNavigation = (
      <MobileNavigationStyles>
        <CloseButton onClick={this.handleClick}>
          <BiX />
        </CloseButton>

        <Menu>
          <MenuItemsVertical>
            {items.map((item, index) => (
              <li key={`navigationItem${index}`}>
                <Link to={item.url} onClick={this.handleClick}>
                  {item.text}
                </Link>
              </li>
            ))}
          </MenuItemsVertical>
        </Menu>

        <Logo icon />

        <ExternalLinks />
      </MobileNavigationStyles>
    );

    return (
      <>
        <MenuButton onClick={this.handleClick}>
          <BiMenu /> Menü
        </MenuButton>

        {this.state.showNav ? mobileNavigation : ''}
      </>
    );
  }
}

export default function Navigation() {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    setSticky(ref.current.getBoundingClientRect().top <= 0);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <NavigationStyles className={`${isSticky ? ' is-sticky' : ''}`} ref={ref}>
      <Logo icon />

      <MobileNavigation />
      <DesktopNavigation />
    </NavigationStyles>
  );
}
