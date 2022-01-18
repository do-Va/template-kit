import React from 'react';
import Logo from '../../Logo';
import CustomLinks from '../../CustomLinks';
import { Wrapper } from './styles';

import { menus, socials } from '../../../constans';

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <CustomLinks links={menus} />
      <CustomLinks links={socials} />
    </Wrapper>
  );
};

export default Header;
