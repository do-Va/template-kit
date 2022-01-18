import React from 'react';

import FeatureItem from '../FeatureItem';
import { Wrapper } from './styles';

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

export default FeatureItems;
