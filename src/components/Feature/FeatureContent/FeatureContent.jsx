import React from 'react';

import { Wrapper, FeatureHeading, Description } from './styles';

import CustomButton from '../../CustomButton';

const FeatureContent = () => {
  return (
    <Wrapper>
      <FeatureHeading>
        App Features Your Customers Want. That Make a Really Great App
      </FeatureHeading>
      <Description>
        The world today seems to run on apps. If it is something that people can
        interact with, then it’s likely that there is an app available for it.
      </Description>
      <CustomButton isArrow type="button">
        Get Started
      </CustomButton>
    </Wrapper>
  );
};

export default FeatureContent;
