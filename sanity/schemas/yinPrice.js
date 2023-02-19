import { MdOutlineMonetizationOn as icon } from 'react-icons/md';

export default {
  name: 'yinPrice',
  title: 'Yin Prices',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Price',
      name: 'price',
      type: 'string',
    },
    {
      title: 'Order',
      name: 'order',
      description:
        'Used for ordering prices in ascending order by this number.',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
      price: 'price',
    },
    prepare(selection) {
      const { title, price } = selection;
      return {
        title,
        subtitle: price,
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
