import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import breakpoints from '../utils/breakpoints';

const HeaderStyles = styled.header`
  padding: var(--spacing) var(--spacing-s);

  ${breakpoints.large`
    padding-top: var(--spacing-l);
  `};

  .logo {
    width: 40vw;
    margin: 0 auto;

    ${breakpoints.large`
      width: 80vw;
    `};
  }
`;

export default class Header extends Component {
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
    return (
      <HeaderStyles>
        <Logo />
      </HeaderStyles>
    );
  }
}
