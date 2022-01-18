import styled from 'styled-components';

export const Wrapper = styled.header`
  margin: 0 auto 76px;
  text-align: center;
  color: var(--clr-primary-paragraph);

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: var(--fs-xs);
  }
`;

export const Title = styled.h3`
  font-size: var(--fs-h3);
  font-weight: var(--fw-bold);
  line-height: var(--lh-h3);
`;

export const Description = styled.p`
  font-size: var(--fs-xl) !important;
  line-height: var(--lh-xl);
  margin-top: 21px;
  max-width: 570px;
`;
