import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import TextBox from './TextBox';
import MidReactangle from '../MidRectangle/MidRectangle';

import placeholder from '../../images/placeholder.svg';

const Hero = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <TextBox />
        <Placeholder src={placeholder} />
      </Container>
      <MidReactangle />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  max-width: 1440px;

  margin: 0 auto;
  padding: 0 130px 134px;
`;

const Container = styled.div`
  max-width: 1180px;
  margin: 65px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Placeholder = styled.img`
  max-width: 450px;
  margin-right: -55px;
`;

export default Hero;
