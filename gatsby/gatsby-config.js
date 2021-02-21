import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Herzkraft Yoga`,
    url: 'https://www.nadineseuffert.com/',
    description: 'Komm noch heute ins #TeamHerzkraft.',
    keywords: ['Herzkraft', 'Yoga'],
    author: {
      name: 'Nadine Seuffert',
      email: 'herzkraft@nadineseuffert.com',
      phone: '',
      phonelink: '',
      address: {
        street: '',
        zip: '',
        city: '',
      },
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '8qyft8sp',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
