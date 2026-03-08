import React from "react";
import ContactForm from "../components/ContactForm";
import Section, { SectionContent } from "../components/Section";

export default function FormularePage() {
  return (
    <Section>
      <SectionContent>
        <h2>Formulare</h2>
        <h2>----------</h2>
        <ContactForm />
      </SectionContent>
    </Section>
  );
}
