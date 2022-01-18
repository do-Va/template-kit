import React from 'react';

import {
  Wrapper,
  TestimonialImage,
  BlockquoteImage,
  Container,
  TestimonialText,
  TestimonialAuthor,
  TestimonialJob,
  TestimomialLogo,
  DotContainer,
} from './styles';
import Dot from '../../Dot';

import blockquote from '../../../images/Blockquote.svg';

const TestimonialItem = ({
  image,
  text,
  author,
  job,
  logo,
  position,
  itemIndex,
  length,
}) => {
  return (
    <Wrapper position={position}>
      <TestimonialImage src={image} />
      <BlockquoteImage src={blockquote} />
      <Container>
        <TestimonialText>{text}</TestimonialText>
        <TestimonialAuthor>{author}</TestimonialAuthor>
        <TestimonialJob>{job}</TestimonialJob>
        <TestimomialLogo src={logo} />

        <DotContainer>
          {[...Array(length).keys()].map(key => (
            <Dot key={key} isFull={itemIndex === key} />
          ))}
        </DotContainer>
      </Container>
    </Wrapper>
  );
};

export default TestimonialItem;
