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
      <script async src="https://www.google-analytics.com/analytics.js" />
      <script>
        {`
          window.ga=window.ga||function()
          {(ga.q = ga.q || []).push(arguments)}
          ;ga.l=+new Date; ga('create',
          '258987239', 'auto'); ga('send',
          'pageview');
        `}
      </script>
      
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
