import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import HKImage from '../components/HKImage';
import SEO from '../components/SEO';
import Section, { SectionContent } from '../components/Section';
import CallToAction from '../components/CallToAction';

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

      <CallToAction />
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
