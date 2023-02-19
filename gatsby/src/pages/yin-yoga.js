import { Link, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import Section, { SectionContent } from '../components/Section';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import EventList from '../components/EventList';
import PriceList from '../components/PriceList';

const YinSection = styled(Section)`
  text-align: center;
`;

const EventSection = styled(Section)`
  text-align: center;
`;

const PriceSection = styled(Section)`
  h2 + p {
    text-align: center;

    span {
      white-space: nowrap;
    }

    strong:first-child {
      color: var(--color-primary);
    }
  }
`;

export default function YinYogaPage({ data }) {
  const { content, yin } = data;
  const events = data.events.nodes;
  const prices = data.prices.nodes;
  const {
    siteMetadata: {
      author: { email },
    },
  } = data.site;

  return (
    <>      
      <SEO />
      <Hero image={content.heroImage.asset.fluid} isYin />
      
      <YinSection id="yin-yoga">
        <SectionContent>
          <div>
            <h2>{yin.introHeadline}</h2>

            <BlockContent blocks={yin._rawIntroText} />
          </div>
        </SectionContent>
      </YinSection>

      <EventSection id="termine">
        <SectionContent>
          <h2>{content.eventsHeadline}</h2>
          <BlockContent blocks={yin._rawEventsText} />

          <EventList events={events} />

          <p className="lead">
            Du suchst die Herzkraft-Termine?{' '}
            <Link className="neutral nowrap" to="/#termine">
              Hier entlang.
            </Link>
          </p>
        </SectionContent>
      </EventSection>

      <PriceSection id="preise">
        <SectionContent>
          <h2>{content.pricesHeadline}</h2>
          <BlockContent blocks={yin._rawPricesText} />

          <PriceList prices={prices} />

          <p className="lead">
            Du hast Fragen zu den Preisen?{' '}
            <a
              className="neutral nowrap"
              href={`mailto:${email}?subject=Frage zu den Herzkraft Yin Yoga-Preisen`}
            >
              Schreib mir eine Nachricht.
            </a>
            <br />
            {content.pricesSubtext}
          </p>
        </SectionContent>
      </PriceSection>
    </>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        author {
          email
        }
      }
    }
    content: sanityHerzkraft {
      eventsHeadline
      pricesHeadline
      pricesSubtext
    }
    yin: sanityYin {
      heroImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      introHeadline
      _rawIntroText(resolveReferences: { maxDepth: 10 })
      _rawEventsText(resolveReferences: { maxDepth: 10 })
      _rawPricesText(resolveReferences: { maxDepth: 10 })
    }
    events: allSanityYinEvent(sort: { fields: date, order: ASC }) {
      nodes {
        name
        date
      }
    }
    prices: allSanityYinPrice(sort: { fields: order, order: ASC }) {
      nodes {
        name
        _rawDescription(resolveReferences: { maxDepth: 10 })
        price
      }
    }
  }
`;
