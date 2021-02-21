import React from 'react';
import { Link, graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import HKImage from '../components/HKImage';
import SEO from '../components/SEO';
import Section, { SectionContent } from '../components/Section';

const CenteredSection = styled(Section)`
  text-align: center;
`;

export default function SinglePostPage({ data: { post } }) {
  return (
    <>
      <SEO title={post.name} image={post.image?.asset?.fluid?.src} />

      <Section>
        <SectionContent>
          <h2>{post.name}</h2>

          <HKImage src={post.image.asset.fluid} isInline />

          <div>
            <BlockContent blocks={post._rawContent} />
          </div>
        </SectionContent>
      </Section>

      <CenteredSection>
        <SectionContent>
          <h3>Jetzt kostenlosen Schnupperkurs buchen!</h3>

          <p>
            <Link className="button" to="/#termine">
              Termin auswählen
            </Link>
          </p>
        </SectionContent>
      </CenteredSection>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
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
      _rawContent(resolveReferences: { maxDepth: 10 })
    }
  }
`;
