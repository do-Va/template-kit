import React from 'react';
import styled from 'styled-components';

import logo from '../../images/Logo2.svg';

const Logo = () => {
  return (
    <LogoContainer>
      <Image src={logo} />
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  width: 52px;
  height: 52px;
`;

const Image = styled.img``;

export default Logo;
