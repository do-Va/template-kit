import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import TextBox from '../TextBox';

const Hero = () => {
  return (
    <Wrapper>
      <Header />
      <TextBox />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 1440px;

  margin: 0 auto;
  padding: 0 130px 0;
`;

export default Hero;
