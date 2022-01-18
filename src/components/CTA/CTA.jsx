import React from 'react';

import FormContainer from './FormContainer';
import ContentContainer from './ContentContainer';
import { Wrapper, Container } from './styles';

const CTA = () => {
  return (
    <Wrapper>
      <Container>
        <FormContainer />
        <ContentContainer />
      </Container>
    </Wrapper>
  );
};

export default CTA;
