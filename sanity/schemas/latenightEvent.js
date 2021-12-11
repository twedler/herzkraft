import { MdOutlineNightlight as icon } from 'react-icons/md';

export default {
  name: 'latenightEvent',
  title: 'Latenight Events',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Date',
      name: 'date',
      type: 'datetime',
      options: {
        dateFormat: 'DD.MM.YYYY',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      date: 'date',
    },
    prepare(selection) {
      const { title, date } = selection;
      return {
        title,
        subtitle: new Date(date).toLocaleDateString(),
      };
    },
  },
};
