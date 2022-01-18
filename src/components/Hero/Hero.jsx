import React from 'react';

import Header from './Header';
import TextBox from './TextBox';
import MidReactangle from '../MidRectangle';
import { Wrapper, Container, Placeholder } from './styles';

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

export default Hero;
