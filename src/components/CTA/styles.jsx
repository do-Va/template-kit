import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 1004px;
  width: 100%;
  padding: 171px 0 180px;
  background-image: linear-gradient(
    to right,
    var(--clr-cta-bg) 50%,
    var(--clr-primary-20) 50%
  );
`;

export const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
