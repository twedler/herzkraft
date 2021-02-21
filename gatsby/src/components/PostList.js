import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import breakpoints from '../utils/breakpoints';

const PostListStyles = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-l);

  ${breakpoints.medium`
    grid-template-columns: 1fr 1fr;
    `};

  ${breakpoints.large`
    grid-template-columns: 1fr 1fr 1fr;
    `};

  .gatsby-image-wrapper {
    margin-bottom: var(--spacing-s);
  }

  h3,
  p {
    margin-bottom: var(--spacing-s);
  }

  h3 a {
    font-weight: var(--font-weight-heavy);

    &:hover {
      text-decoration: none;
    }
  }

  a {
    display: inline-flex;
    align-items: center;
    font-weight: var(--font-weight-bold);

    svg {
      margin-left: var(--spacing-s);
    }
  }
`;

function SinglePost({ post }) {
  return (
    <div>
      <Img fluid={post.image.asset.fluid} alt={post.name} />

      <h3>
        <Link to={`/post/${post.slug.current}`}>{post.name}</Link>
      </h3>
      <p>{post.summary}</p>

      <Link to={`/post/${post.slug.current}`}>
        Mehr lesen <FaArrowRight />
      </Link>
    </div>
  );
}

export default function PostList({ posts }) {
  return (
    <PostListStyles>
      {posts.map((post, index) => (
        <SinglePost key={`post${index}`} post={post} />
      ))}
    </PostListStyles>
  );
}
