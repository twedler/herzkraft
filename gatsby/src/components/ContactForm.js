import React from "react";
import Section, { SectionContent } from "./Section";

export default function ContactForm() {
  const body = `Hallo liebe Nadine,%0d%0a%0d%0ameine Nachricht an dich: (bitte angeben)%0d%0a%0d%0aVielen Dank und viele Grüße%0d%0a%0d%0a`;

  return (
    <Section id="contact">
      <SectionContent>
        <h2>Kontakt</h2>
        <p>
          Von Herz zu Herz - falls Du Fragen zu meinen Angeboten oder sonst was
          auf dem Herzen hast, schreib mir gerne eine Nachricht.
        </p>
        <p>
          <a
            className="button"
            href={`mailto:herzkraft@nadineseuffert.com?subject=Herzensbotschaft&body=${body}`}
          >
            Absenden
          </a>
        </p>
      </SectionContent>
    </Section>
  );
}
