import React from 'react';
import styled from 'styled-components';

const CustomLink = ({ title, img }) => {
  return (
    <Wrapper>
      {img ? (
        <Link href="#">
          <img src={img} alt={title} />
        </Link>
      ) : (
        <Link href="#">{title}</Link>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.li`
  font-size: var(--fs-xl);
`;

const Link = styled.a`
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
`;

export default CustomLink;
