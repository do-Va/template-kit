import React from 'react';
import styled from 'styled-components';

import Hero from '../../components/Hero';
import Feature from '../../components/Feature';
import Testimonial from '../../components/Testimonial';
import CTA from '../../components/CTA';
import Team from '../../components/Team';

const HomePage = () => {
  return (
    <Wrapper>
      <Hero />
      <Feature />
      <Testimonial />
      <CTA />
      <Team />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-top: 40px;
`;

export default HomePage;
