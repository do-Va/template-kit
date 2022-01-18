import styled from 'styled-components';

export const Wrapper = styled.li`
  font-size: var(--fs-xl);
`;

export const Link = styled.a`
  color: var(--clr-menu);
  position: relative;
  transition: color 0.2s linear;

  &:hover {
    color: var(--clr-line);
  }

  &::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scale(0);
    background-color: var(--clr-line);

    transition: transform 0.2s linear;
  }

  &:hover::after {
    transform: scale(1);
  }

  & img {
    min-width: 24px;
    height: 24px;
  }
`;
