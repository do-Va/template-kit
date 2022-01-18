import React from 'react';
import styled from 'styled-components';

import FeatureItem from '../FeatureItem';

import { features } from '../../../constans';

const FeatureItems = () => {
  return (
    <Wrapper>
      {features.map(item => (
        <FeatureItem key={item.id} {...item} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
`;

export default FeatureItems;
