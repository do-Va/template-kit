import React from 'react';
import styled from 'styled-components';

import logo from '../../images/Logo2.svg';

const Logo = () => {
  return (
    <LogoContainer>
      <img src={logo} alt="Logo" />
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  min-width: 52px;
  height: 52px;
`;

export default Logo;
