import React from 'react';
import styled from 'styled-components';

const MidReactangle = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  width: 1230px;
  height: 132px;
  border-radius: 10px;
  background-color: var(--clr-primary);

  transform: translateY(50%);
`;

export default MidReactangle;
