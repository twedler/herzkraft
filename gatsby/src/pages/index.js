import { Link, graphql } from 'gatsby';
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import Section, { SectionContent } from '../components/Section';
import Hero from '../components/Hero';
import HKImage from '../components/HKImage';
import SEO from '../components/SEO';
import EventList from '../components/EventList';
import PostList from '../components/PostList';
import PriceList from '../components/PriceList';
import breakpoints from '../utils/breakpoints';

const HerzkraftSectionContent = styled(SectionContent)`
  display: grid;
  gap: var(--spacing-l);
  margin-bottom: var(--spacing-l);

  ${breakpoints.large`
    grid-template-columns: 1fr 1fr;
  `};

  h2 {
    text-align: left;
  }
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

const BlogSection = styled(Section)`
  h2 {
    margin-bottom: var(--spacing-l);
  }

  h3 {
    color: var(--color-primary);
  }
`;

export default function HomePage({ data }) {
  const { content } = data;
  const events = data.events.nodes;
  const prices = data.prices.nodes;
  const posts = data.posts.nodes;
  const {
    siteMetadata: {
      author: { email },
    },
  } = data.site;

  return (
    <>
      <SEO />
      <Hero />

      <Section id="herzkraft-yoga">
        <HerzkraftSectionContent>
          <div>
            <h2>{content.introHeadline}</h2>
            <p>{content.introText}</p>
            <p>
              <Link className="button" to="/#nadine">
                {content.introButton}
              </Link>
            </p>
          </div>

          <HKImage src={content.introImage.asset.fluid} />
        </HerzkraftSectionContent>
      </Section>

      <EventSection id="termine">
        <SectionContent>
          <h2>{content.eventsHeadline}</h2>
          <p>{content.eventsText}</p>

          <EventList events={events} />

          <h3>{content.eventsSubline}</h3>
          <p>{content.eventsSubtext}</p>
        </SectionContent>
      </EventSection>

      <PriceSection id="preise">
        <SectionContent>
          <h2>{content.pricesHeadline}</h2>
          <BlockContent blocks={content._rawPricesText} />

          <PriceList prices={prices} />

          <p className="lead">
            Du hast Fragen zu den Preisen?{' '}
            <a
              className="neutral nowrap"
              href={`mailto:${email}?subject=Frage zu den Herzkraft Yoga-Preisen`}
            >
              Schreib mir eine Nachricht
            </a>
            .
          </p>
        </SectionContent>
      </PriceSection>

      <BlogSection id="blog">
        <SectionContent>
          <h2>{content.blogHeadline}</h2>
          <PostList posts={posts} />
        </SectionContent>
      </BlogSection>

      <Section id="nadine">
        <SectionContent>
          <h2>{content.nadineHeadline}</h2>
          <HKImage src={content.nadineImage.asset.fluid} isInline />
          <BlockContent blocks={content._rawNadineText} />
        </SectionContent>
      </Section>
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
      heroImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      introHeadline
      introText
      introButton
      introImage {
        asset {
          fluid(maxWidth: 768) {
            ...GatsbySanityImageFluid
          }
        }
      }
      eventsHeadline
      eventsText
      eventsSubline
      eventsSubtext
      pricesHeadline
      _rawPricesText(resolveReferences: { maxDepth: 10 })
      blogHeadline
      nadineHeadline
      nadineImage {
        asset {
          fluid(maxWidth: 768) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawNadineText(resolveReferences: { maxDepth: 10 })
    }
    events: allSanityEvent(sort: { fields: date, order: ASC }) {
      nodes {
        name
        date
      }
    }
    prices: allSanityPrice(sort: { fields: order, order: ASC }) {
      nodes {
        name
        _rawDescription(resolveReferences: { maxDepth: 10 })
        price
      }
    }
    posts: allSanityPost(sort: { fields: _createdAt, order: DESC }) {
      nodes {
        name
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 768) {
              ...GatsbySanityImageFluid
            }
          }
        }
        summary
      }
    }
  }
`;
