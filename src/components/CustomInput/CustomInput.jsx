import React from 'react';

import { Wrapper, Label, Input } from './styles';

const CustomInput = ({ title }) => {
  return (
    <Wrapper>
      <Label>{title}</Label>
      <Input type="text" />
    </Wrapper>
  );
};

export default CustomInput;
