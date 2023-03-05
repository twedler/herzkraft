import React from 'react';
import ContactForm from '../components/ContactForm';
import NewsletterForm from '../components/NewsletterForm';
import Section, { SectionContent } from '../components/Section';

export default function FormularePage() {
  return (        
      <Section>
        <SectionContent>
          <h2>Formulare</h2>
          <h2>----------</h2>
          <NewsletterForm />
          <h2>----------</h2>
          <ContactForm />
        </SectionContent>
      </Section>
  );
}
