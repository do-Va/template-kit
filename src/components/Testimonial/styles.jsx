import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: 1220px;
  height: 1008px;
  padding: 164px 0;
  margin: 0 auto;
  position: relative;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 22px;

  bottom: 180px;
  right: 0;
`;

export const Button = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 1px solid var(--clr-menu-social-icon);
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
