import React from 'react';
import styled from 'styled-components';

import FeatureContent from './FeatureContent';
import FeatureItems from './FeatureItems';

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

const Wrapper = styled.section`
  width: 100%;
  background-color: var(--clr-feature-bg);
  padding-top: 170px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 130px;
`;

const Frame = styled.img`
  width: 80%;
  max-width: 1220px;
  margin: 0 auto;
`;

export default Feature;
