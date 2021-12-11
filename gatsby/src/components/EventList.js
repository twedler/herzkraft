import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { CgUserAdd } from 'react-icons/cg';
import breakpoints, { narrowContentWidth } from '../utils/breakpoints';

const months = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember',
];

const EventListStyles = styled.ul`
  max-width: ${narrowContentWidth};
  margin: var(--spacing-l) auto var(--spacing-l);
  text-align: left;

  display: grid;
  grid-template-columns: min-content max-content 1fr min-content;
  gap: 0 var(--spacing);
  align-items: center;

  > * {
    margin-bottom: 0;
  }

  hr {
    grid-column: 1 / span 4;
    margin-top: var(--spacing-s);
    margin-bottom: var(--spacing-s);
  }

  p {
    font-family: var(--font-secondary);
    line-height: 1;

    &:first-child {
      width: var(--spacing-xl);
    }
  }
`;

const DayStyles = styled.strong`
  font-size: var(--font-size-xl);
`;

const MonthStyles = styled.small`
  text-transform: uppercase;
`;

const TimeStyles = styled.p`
  font-size: var(--font-size-l);
  font-weight: var(--font-weight-bold);
`;

const NameStyles = styled.p`
  font-size: var(--font-size-l);
  grid-column: 1 / span 3;

  ${breakpoints.small`
    grid-column: 3;
  `};
`;

const AddUserStyles = styled.a`
  padding: var(--spacing-xs) var(--spacing-s);
  color: var(--color-primary);
  background: var(--color-white);
  border: 2px solid var(--color-primary);
  border-radius: var(--border-radius-l);
  transition: all var(--duration-s);

  .is-page--latenight & {
    color: var(--color-white);
    border-color: var(--color-white);
    background: none;

    &:hover {
      color: var(--color-latenight);
      background: var(--color-white);
    }
  }

  svg {
    display: block;
    font-size: var(--font-size-xxl);
    margin-left: 0;
  }

  &:hover {
    color: var(--color-white);
    background: var(--color-primary);
  }
`;

function SingleEvent({ event }) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            email
          }
        }
      }
    }
  `);

  const {
    author: { email },
  } = siteMetadata;

  const dateObject = new Date(event.date);
  const day = dateObject.getDate();
  const month = months[dateObject.getMonth()];
  const time = `${dateObject.getHours()}.${dateObject.getMinutes()}`;

  const date = `${day}. ${month}`;
  const subject = `Kursanmeldung: ${event.name} (${date})`;
  const body = `Hallo liebe Nadine,%0d%0a%0d%0ahiermit möchte ich mich für folgenden Kurs anmelden:%0d%0a%0d%0aName: (bitte angeben)%0d%0aKurs: ${event.name}%0d%0aTermin: ${date} um ${time} Uhr%0d%0a%0d%0aIch habe die AGBs unter https://www.nadineseuffert.com/agb gelesen und bin damit einverstanden.%0d%0a%0d%0aVielen Dank und viele Grüße%0d%0a%0d%0a`;

  return (
    <>
      <p>
        <DayStyles>{day}.</DayStyles>
        <br />
        <MonthStyles>{month}</MonthStyles>
      </p>
      <TimeStyles>{time} Uhr</TimeStyles>
      <NameStyles>{event.name}</NameStyles>
      <AddUserStyles href={`mailto:${email}?subject=${subject}&body=${body}`}>
        <CgUserAdd />
      </AddUserStyles>
      <hr />
    </>
  );
}

export default function EventList({ events }) {
  return (
    <EventListStyles>
      <hr />
      {events.map((event, index) => (
        <SingleEvent key={`event${index}`} event={event} />
      ))}
    </EventListStyles>
  );
}
