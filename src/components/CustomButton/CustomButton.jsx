import React from 'react';

import { Wrapper, Arrow } from './styles';

const CustomButton = ({
  children,
  isArrow,
  isEmpty,
  fontSize,
  height,
  width,
  type,
}) => {
  return (
    <Wrapper
      width={width}
      height={height}
      type={type}
      isFill
      fontSize={fontSize}
      isEmpty={isEmpty}
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

export default CustomButton;
