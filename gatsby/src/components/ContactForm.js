import React from "react";
import styled from "styled-components";
import Section, { SectionContent } from "./Section";

const ContactSection = styled(Section)`
  ${SectionContent} > p {
    text-align: center;
  }
`;

export default function ContactForm() {
  const body = `Hallo liebe Nadine,%0d%0a%0d%0ameine Nachricht an dich:%0d%0a%0d%0a(bitte angeben)%0d%0a%0d%0aVielen Dank und viele Grüße%0d%0a%0d%0a`;

  return (
    <ContactSection id="contact">
      <SectionContent>
        <h2>Kontakt</h2>
        <p>
          Von Herz zu Herz - falls Du Fragen zu meinen Angeboten oder sonst was
          auf dem Herzen hast.
        </p>
        <p>
          <a
            className="button"
            href={`mailto:herzkraft@nadineseuffert.com?subject=Herzensbotschaft&body=${body}`}
          >
            Schreib mir gerne eine Nachricht
          </a>
        </p>
      </SectionContent>
    </ContactSection>
  );
}
