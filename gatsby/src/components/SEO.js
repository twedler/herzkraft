import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          url
          description
          keywords
          author {
            name
            email
            address {
              street
              zip
              city
            }
          }
        }
      }
    }
  `);

  return (
    <Helmet>
      {/* <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}> */}
      <html lang="de" />
      <title>
        {site.siteMetadata.author.name} | {site.siteMetadata.title}
      </title>
      {/* <title>{title}</title> */}
      {/* Fav Icons */}
      <link rel="mask-icon" href="/favicon.svg" color="#000" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      {/* <link rel="alternate icon" href="/favicon.ico" /> */}
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || '/logo.jpg'} />
      <meta
        property="og:title"
        content={title || site.siteMetadata.title}
        key="ogtitle"
      />
      {/* <meta property="og:title" content={title} key="ogtitle" /> */}
      <meta
        propery="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta
        property="og:description"
        content={description || site.siteMetadata.description}
        key="ogdesc"
      />
      {children}
    </Helmet>
  );
}
