import styled from 'styled-components';

export const Wrapper = styled.header`
  margin: 0 auto 76px;
  text-align: center;
  color: var(--clr-primary-paragraph);

  display: flex;
  flex-direction: column;
  align-items: center;

  .short-text {
    font-size: var(--fs-xs);
  }

  .title {
    font-size: var(--fs-h3);
    font-weight: var(--fw-bold);
    line-height: var(--lh-h3);
  }

  .description {
    font-size: var(--fs-xl);
    line-height: var(--lh-xl);
    margin-top: 21px;
    max-width: 570px;
  }
`;
