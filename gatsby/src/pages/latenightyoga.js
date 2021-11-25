import { Link, graphql } from 'gatsby';
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import Section, { SectionContent } from '../components/Section';
import Hero from '../components/Hero';
import HKImage from '../components/HKImage';
import SEO from '../components/SEO';
import EventList from '../components/EventList';
import PostList from '../components/PostList';
import PriceList from '../components/PriceList';
import breakpoints from '../utils/breakpoints';

export default function LateNightYogaPage() {
  return (
    <>
      <SEO />

      <Section id="herzkraft-yoga">
        <SectionContent>
          <div>
            <h2>Test</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
              cum earum soluta quisquam ipsam ad provident non accusamus
              nostrum, fugit voluptatem officia. Vero reprehenderit, laborum
              quia consequatur ratione id placeat?
            </p>
            <p>
              <Link className="button" to="/#nadine">
                link
              </Link>
            </p>
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
