import React from 'react';

import CustomButton from '../../CustomButton';
import {
  Wrapper,
  HeadingPrimary,
  Rectangle,
  Description,
  ButtonContainer,
  Information,
  InformationLink,
  Scroll,
  Line,
} from './styles';

const TextBox = () => {
  return (
    <Wrapper>
      <HeadingPrimary>head of a newspaper story.</HeadingPrimary>
      <Rectangle />
      <Description>
        What's a resume headline, and how can it help you showcase your
        credentials? A resume headline (also known as a resume title) is a brief
        phrase that highlights your value as a candidate
      </Description>
      <ButtonContainer>
        <CustomButton isArrow type="button">
          Get started
        </CustomButton>
        <CustomButton isArrow isEmpty type="button">
          Action Links
        </CustomButton>
      </ButtonContainer>
      <Information>
        Need more some information?{' '}
        <InformationLink href="#">Learn more</InformationLink>
      </Information>
      <Scroll>
        <p>SCROLL</p>
        <Line></Line>
      </Scroll>
    </Wrapper>
  );
};

export default TextBox;
