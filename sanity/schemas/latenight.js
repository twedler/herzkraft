import { MdNightlight as icon } from 'react-icons/md';

export default {
  name: 'latenight',
  title: 'Latenight',
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
      title: 'Intro Button',
      name: 'introButton',
      type: 'string',
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
  ],
};
