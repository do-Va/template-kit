import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 881px;
  padding: 167px 0 86px;
  position: relative;
`;

export const Button = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 1px solid var(--clr-menu-social-icon);
  background-color: transparent;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  left: ${props => props.left && 30}%;
  right: ${props => props.right && 30}%;
`;

export const DotContainer = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;

  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
`;
