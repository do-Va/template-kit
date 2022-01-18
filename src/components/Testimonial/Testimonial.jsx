import React, { useState, useEffect } from 'react';

import TestimonialHeader from './TestimonialHeader';
import Carousel from './Carousel';
import { Wrapper, ButtonContainer, Button } from './styles';

import { testimonials } from '../../constans';

import leftIcon from '../../images/chevron-left.svg';
import rightIcon from '../../images/chevron-right2.svg';

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex + 1;

      if (index > testimonials.length - 1) {
        index = 0;
      }

      return index;
    });
  };

  const prevSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex - 1;

      if (index < 0) {
        index = testimonials.length - 1;
      }

      return index;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(oldIndex => {
        let index = oldIndex + 1;

        if (index > testimonials.length - 1) {
          index = 0;
        }

        return index;
      });
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <Wrapper>
      <TestimonialHeader />
      <Carousel testimonials={testimonials} index={index} />

      <ButtonContainer>
        <Button onClick={prevSlide}>
          <img src={leftIcon} alt="left icon" />
        </Button>
        <Button onClick={nextSlide}>
          <img src={rightIcon} alt="right icon" />
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Testimonial;
