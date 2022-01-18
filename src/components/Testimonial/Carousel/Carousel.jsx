import React from 'react';

import TestimonialItem from '../TestimonialItem';
import { Wrapper } from './styles';

import { checkSlideSide } from '../../../helper';

const Carousel = ({ testimonials, index }) => {
  return (
    <Wrapper>
      {testimonials.map((item, itemIndex) => {
        let position = checkSlideSide(index, itemIndex, testimonials);

        return (
          <TestimonialItem
            key={item.id}
            {...item}
            position={position}
            itemIndex={itemIndex}
            length={testimonials.length}
          />
        );
      })}
    </Wrapper>
  );
};

export default Carousel;
