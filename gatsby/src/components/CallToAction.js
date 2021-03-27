import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Section, { SectionContent } from './Section';

const CallToActionStyles = styled(Section)`
  text-align: center;
`;

export default function CallToAction() {
  return (
    <CallToActionStyles>
      <SectionContent>
        <h3>Jetzt kostenlosen Schnupperkurs buchen!</h3>

        <p>
          <Link className="button" to="/#termine">
            Termin auswählen
          </Link>
        </p>
      </SectionContent>
    </CallToActionStyles>
  );
}
