import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';
import CustomLinks from '../CustomLinks';

import { menus, socials } from '../../constans';

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <CustomLinks links={menus} />
      <CustomLinks links={socials} />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  max-width: 1440px;
  height: 100vh;

  margin: 0 auto;
  padding: 32px 130px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
