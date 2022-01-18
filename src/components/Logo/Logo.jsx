import React from 'react';
import { Wrapper } from './styles';

import logo from '../../images/Logo2.svg';

const Logo = () => {
  return (
    <Wrapper>
      <img src={logo} alt="Logo" />
    </Wrapper>
  );
};

export default Logo;
