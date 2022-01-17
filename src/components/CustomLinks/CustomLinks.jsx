import React from 'react';
import styled from 'styled-components';

import CustomLink from '../CustomLink';

const CustomLinks = ({ links }) => {
  return (
    <Wrapper>
      {links.map(item => (
        <CustomLink key={item.id} {...item} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;

  gap: 35px;
`;

export default CustomLinks;
