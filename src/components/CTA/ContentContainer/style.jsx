import styled from 'styled-components';

export const Wrapper = styled.div`
  color: var(--clr-primary-paragraph);
  width: 383px;

  p {
    font-size: var(--fs-xs);
  }
`;

export const Title = styled.h2`
  font-size: var(--fs-h2);
  line-height: var(--lh-h2);
  font-weight: var(--fw-bold);
  margin-top: 45px;
`;

export const Description = styled.p`
  font-size: var(--fs-xxl) !important;
  line-height: var(--lh-xxl);
  margin: 50px 0 33px;
`;
