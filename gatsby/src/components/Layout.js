import React from 'react';
import 'normalize.css';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import DesignTokens from '../styles/DesignTokens';
import { Helmet } from 'react-helmet';

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KB09PJ7FZZ"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-KB09PJ7FZZ", {'anonymize_ip': true});`
          }
        </script>

{/*         <script async src="https://nadineseuffert.activehosted.com/f/embed.php?id=1" type="text/javascript" charset="utf-8" />
        <script async src="https://nadineseuffert.activehosted.com/f/embed.php?id=3" type="text/javascript" charset="utf-8" /> */}
      </Helmet>
      
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
