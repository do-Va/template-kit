import React from 'react';

import { Wrapper, Link } from './styles';

const CustomLink = ({ title, img }) => {
  return (
    <Wrapper>
      {img ? (
        <Link href="#">
          <img src={img} alt={title} />
        </Link>
      ) : (
        <Link href="#">{title}</Link>
      )}
    </Wrapper>
  );
};

export default CustomLink;
