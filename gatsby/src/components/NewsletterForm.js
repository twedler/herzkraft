import React from 'react';
import Section, { SectionContent } from '../components/Section';

export default function NewsletterForm() {
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://nadineseuffert.activehosted.com/f/embed.php?id=1";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (        
      <Section>
        <SectionContent>
          <div className="_form_1"></div>
        </SectionContent>
      </Section>
  );
}