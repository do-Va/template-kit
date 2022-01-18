import React from 'react';

import { Wrapper, FeatureImage, FeatureTitle, FeatureText } from './styles';

const FeatureItem = ({ title, text, img }) => {
  return (
    <Wrapper>
      <FeatureImage src={img} />
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureText>{text}</FeatureText>
    </Wrapper>
  );
};

export default FeatureItem;
