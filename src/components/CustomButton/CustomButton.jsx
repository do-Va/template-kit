import React from 'react';
import styled from 'styled-components';

const CustomButton = ({ children, isArrow, isEmpty, fontSize }) => {
  return (
    <Wrapper
      isFill
      fontSize={fontSize}
      isEmpty={isEmpty}
      type="button"
      onClick={() => console.log('tiklandi')}
    >
      {children}
      {isArrow && (
        <Arrow>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </Arrow>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  width: 230px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  font-size: ${props => (props.fontSize ? props.fontSize : 18)}px;
  color: ${props =>
    props.isEmpty ? 'var(--clr-primary)' : 'var(--clr-white)'};
  background-color: ${props =>
    props.isEmpty ? 'var(--clr-white)' : 'var(--clr-primary)'};

  border-radius: 8px;
  border: 1px solid currentColor;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    color: ${props => props.isEmpty && 'var(--clr-white)'};
    background-color: ${props =>
      props.isEmpty ? 'var(--clr-primary)' : 'var(--clr-primary-drk)'};
  }
`;

const Arrow = styled.span`
  position: absolute;
  right: 14px;
`;

export default CustomButton;
