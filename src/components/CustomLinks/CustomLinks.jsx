import React from 'react';

import CustomLink from '../CustomLink';
import { Wrapper } from './styles';

const CustomLinks = ({ links }) => {
  return (
    <Wrapper>
      {links.map(item => (
        <CustomLink key={item.id} {...item} />
      ))}
    </Wrapper>
  );
};

export default CustomLinks;
