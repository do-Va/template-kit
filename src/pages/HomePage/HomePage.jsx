import React from 'react';
import styled from 'styled-components';

import Hero from '../../components/Hero';

const HomePage = () => {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-top: 40px;
`;

export default HomePage;
