import { MdEdit as icon } from 'react-icons/md';

export default {
  name: 'post',
  title: 'Blog Posts',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'Image',
      name: 'image',
      description: 'Resolution: 768x513',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Summary',
      name: 'summary',
      type: 'text',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Order',
      name: 'order',
      description: 'Used for ordering posts in ascending order by this number.',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
      date: 'date',
      media: 'image',
    },
    prepare(selection) {
      const { title, date, media } = selection;
      return {
        title,
        subtitle: new Date(date).toLocaleDateString(),
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Ascending Order',
      name: 'ascendingOrder',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};
