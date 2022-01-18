import React from 'react';
import styled from 'styled-components';

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
      <CustomButton isArrow>Get Started</CustomButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 455px;
`;

const FeatureHeading = styled.h3`
  font-size: var(--fs-h3);
  line-height: var(--lh-h3);
  font-weight: var(--fw-bold);
  margin-bottom: 40px;
`;

const Description = styled.p`
  font-size: var(--fs-xxl);
  line-height: var(--lh-xxl);
  letter-spacing: 0.15px;
  color: var(--clr-primary-paragraph);
  margin-bottom: 65px;
`;

export default FeatureContent;
