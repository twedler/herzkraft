import React from 'react';
import 'normalize.css';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import DesignTokens from '../styles/DesignTokens';

export default function Layout({ children }) {
  return (
    <>
      {/* Styles */}
      <DesignTokens />
      <GlobalStyles />
      <Typography />

      {/* Content */}
      <Header />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
