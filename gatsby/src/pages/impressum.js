import React from 'react';
import SEO from '../components/SEO';
import { TextSection, SectionContent } from '../components/Section';

export default function ImpressumPage() {
  return (
    <>
      <SEO title="Impressum" />

      <TextSection>
        <SectionContent>
          <h1>Impressum</h1>
          <p>
            Nadine Seuffert
            <br />
            68165 Mannheim
          </p>
          <p>
            <a href="mailto:herzkraft@nadineseuffert.com">
              herzkraft@nadineseuffert.com
            </a>
            <br />
            Telefon: auf Anfrage
          </p>
          <p>
            Screendesign: Carolin Nieß
            <br />
            Programmierung: Thomas Wedler
            <br />
            Fotos: Nadine Seuffert
          </p>
          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
            <br />
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. <br />
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            <br />
            Die verwendeten Bilder sind Eigentum von Nadine Seuffert, sofern
            nicht anders gekennzeichnet. Die Verwendung der Bilder ist lediglich
            nach Absprache möglich.
          </p>
        </SectionContent>
      </TextSection>
    </>
  );
}
