import React from 'react';
import { Helmet } from 'react-helmet';
import Section, { SectionContent } from '../components/Section';

export default function NewsletterForm() {
  return (        
      <Section>
        <SectionContent>
          <div className="_form_1"></div>

          <Helmet>
            <script async src="https://nadineseuffert.activehosted.com/f/embed.php?id=1" type="text/javascript" charSet="utf-8" />
          </Helmet>
        </SectionContent>
      </Section>
  );
}