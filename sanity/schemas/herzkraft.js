import { MdFavorite as icon } from 'react-icons/md';

export default {
  name: 'herzkraft',
  title: 'Herzkraft',
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
      type: 'text',
    },
    {
      title: 'Intro Button',
      name: 'introButton',
      type: 'string',
    },
    {
      title: 'Intro Image',
      name: 'introImage',
      description: 'Resolution: 768x513',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Events Headline',
      name: 'eventsHeadline',
      type: 'string',
    },
    {
      title: 'Events Text',
      name: 'eventsText',
      type: 'text',
    },
    {
      title: 'Events Subline',
      name: 'eventsSubline',
      type: 'string',
    },
    {
      title: 'Events Subtext',
      name: 'eventsSubtext',
      type: 'text',
    },
    {
      title: 'Prices Headline',
      name: 'pricesHeadline',
      type: 'string',
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
      title: 'Prices Subtext',
      name: 'pricesSubtext',
      type: 'string',
    },
    {
      title: 'Blog Headline',
      name: 'blogHeadline',
      type: 'string',
    },
    {
      title: 'Nadine Headline',
      name: 'nadineHeadline',
      type: 'string',
    },
    {
      title: 'Nadine Image',
      name: 'nadineImage',
      description: 'Resolution: 768x513',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Nadine Text',
      name: 'nadineText',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
