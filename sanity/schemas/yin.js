import { MdSelfImprovement as icon } from 'react-icons/md';

export default {
  name: 'yin',
  title: 'Yin Yoga',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      description: 'Resolution: 1920x900',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Intro Headline',
      name: 'introHeadline',
      type: 'string',
    },
    {
      title: 'Intro Text',
      name: 'introText',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' },
              {
                title: 'NoWrap',
                value: 'span',
                blockEditor: {
                  icon: () => 'NW',
                },
              },
            ],
          },
        },
      ],
    },
    {
      title: 'Events Text',
      name: 'eventsText',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' },
              {
                title: 'NoWrap',
                value: 'span',
                blockEditor: {
                  icon: () => 'NW',
                },
              },
            ],
          },
        },
      ],
    },
    {
      title: 'Prices Text',
      name: 'pricesText',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' },
              {
                title: 'NoWrap',
                value: 'span',
                blockEditor: {
                  icon: () => 'NW',
                },
              },
            ],
          },
        },
      ],
    },
    {
      title: 'About Headline',
      name: 'aboutHeadline',
      type: 'string',
    },
    {
      title: 'About Image',
      name: 'aboutImage',
      description: 'Resolution: 768x513',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'About Text',
      name: 'aboutText',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
