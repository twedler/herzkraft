import path from 'path';

async function turnPostsIntoPages({ graphql, actions }) {
  const postTemplate = path.resolve('./src/templates/Post.js');
  const { data } = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  data.posts.nodes.forEach((post) => {
    actions.createPage({
      path: `post/${post.slug.current}`,
      component: postTemplate,
      context: {
        slug: post.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  await Promise.all([turnPostsIntoPages(params)]);
}
