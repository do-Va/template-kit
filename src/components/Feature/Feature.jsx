import React from 'react';

import FeatureContent from './FeatureContent';
import FeatureItems from './FeatureItems';
import { Wrapper, Container, Frame } from './styles';

import frame from '../../images/Frame.svg';

const Feature = () => {
  return (
    <Wrapper>
      <Container>
        <FeatureContent />
        <FeatureItems />
      </Container>
      <Frame src={frame} />
    </Wrapper>
  );
};

export default Feature;
