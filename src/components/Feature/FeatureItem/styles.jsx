import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 287px;
`;

export const FeatureImage = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 12px;
`;

export const FeatureTitle = styled.h5`
  font-size: var(--fs-h5);
  line-height: var(--lh-h5);
  font-weight: var(--fw-bold);
`;

export const FeatureText = styled.p`
  font-size: var(--fs-xl);
  line-height: var(--lh-xl);
  color: var(--clr-primary-paragraph);
`;
