import React from 'react';
import styled from 'styled-components';

import Hero from '../../components/Hero';
import Feature from '../../components/Feature';

const HomePage = () => {
  return (
    <Wrapper>
      <Hero />
      <Feature />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-top: 40px;
`;

export default HomePage;
