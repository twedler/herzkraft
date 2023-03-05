import React from 'react';
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
          <div className="_form_3"></div>
        </SectionContent>
      </Section>
  );
}
