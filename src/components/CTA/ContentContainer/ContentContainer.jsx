import React from 'react';

import CustomButton from '../../CustomButton';
import { Description, Title, Wrapper } from './style';

const ContentContainer = () => {
  return (
    <Wrapper>
      <p>SHORT HEADLINE</p>
      <Title>Subcribe our newsletter</Title>
      <Description>
        Online businesses utilize newsletters to keep their brand top-of-mind
        for consumers, establishing authority.
      </Description>
      <CustomButton type="button" height={50}>
        Learn More
      </CustomButton>
    </Wrapper>
  );
};

export default ContentContainer;
