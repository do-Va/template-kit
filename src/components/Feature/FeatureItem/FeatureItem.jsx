import React from 'react';
import styled from 'styled-components';

const FeatureItem = ({ title, text, img }) => {
  return (
    <Wrapper>
      <FeatureImage src={img} />
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureText>{text}</FeatureText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 287px;
`;

const FeatureImage = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 12px;
`;

const FeatureTitle = styled.h5`
  font-size: var(--fs-h5);
  line-height: var(--lh-h5);
  font-weight: var(--fw-bold);
`;

const FeatureText = styled.p`
  font-size: var(--fs-xl);
  line-height: var(--lh-xl);
  color: var(--clr-primary-paragraph);
`;

export default FeatureItem;
