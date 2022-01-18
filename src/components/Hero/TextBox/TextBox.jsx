import React from 'react';
import styled from 'styled-components';

import CustomButton from '../../CustomButton';

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
        <CustomButton isArrow>Get started</CustomButton>
        <CustomButton isArrow isEmpty>
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

const Wrapper = styled.div`
  max-width: 619px;
  color: var(--clr-primary-paragraph);
`;

const HeadingPrimary = styled.h1`
  font-size: var(--fs-h1);
  line-height: var(--lh-h1);
  margin-bottom: 22px;
  font-weight: var(--fw-bold);
  color: var(--clr-secondary);
`;

const Rectangle = styled.div`
  width: 230px;
  height: 10px;
  margin-bottom: 52px;

  background-color: var(--clr-primary);
`;

const Description = styled.p`
  display: inline-block;
  font-size: var(--fs-xl);
  line-height: var(--lh-xl);
  max-width: 489px;
  margin-bottom: 55px;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 21px;
  gap: 19px;
`;

const Information = styled.p`
  font-size: var(--fs-m);
`;

const InformationLink = styled.a`
  color: var(--clr-primary);
`;

const Scroll = styled.div`
  height: 150px;
  font-size: var(--fs-s);
  margin-top: 48px;
  font-weight: var(--fw-medium);
  color: var(--clr-primary);
  position: relative;

  display: flex;
  gap: 16px;

  p {
    transform-origin: 10px 10px;
    transform: rotate(90deg);
  }
`;

const Line = styled.div`
  width: 69px;
  height: 2px;
  background-color: var(--clr-primary);
  transform: rotate(90deg);
  position: absolute;
  bottom: 25%;
  left: -22.5px;
`;

export default TextBox;
