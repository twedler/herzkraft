import React, { useEffect } from 'react';
import Section, { SectionContent } from './Section';

export default function ContactForm() {

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://nadineseuffert.activehosted.com/f/embed.php?id=3";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (        
      <Section>
        <SectionContent>
          <div className="_form_3"></div>
        </SectionContent>
      </Section>
  );
}