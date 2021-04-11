import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Section, { SectionContent } from '../components/Section';
import SEO from '../components/SEO';
import PostList from '../components/PostList';
import CallToAction from '../components/CallToAction';

const BlogSection = styled(Section)`
  h2 {
    margin-bottom: var(--spacing-l);
  }

  h3 {
    color: var(--color-primary);
  }
`;

export default function BlogPage({ data }) {
  const { content } = data;
  const posts = data.posts.nodes;

  return (
    <>
      <SEO />

      <BlogSection>
        <SectionContent>
          <h2>{content.blogHeadline}</h2>
          <PostList posts={posts} />
        </SectionContent>
      </BlogSection>

      <CallToAction />
    </>
  );
}

export const query = graphql`
  query {
    content: sanityHerzkraft {
      blogHeadline
    }
    posts: allSanityPost(sort: { fields: order, order: ASC }) {
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
