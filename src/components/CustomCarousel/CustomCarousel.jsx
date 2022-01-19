import React from 'react';

import { Wrapper } from './styles';

import { checkSlideSide } from '../../helper';

const CustomCarousel = ({
  gap,
  obj,
  index,
  Component,
  hidden,
  width,
  height,
}) => {
  return (
    <Wrapper gap={gap} hidden={hidden} width={width} height={height}>
      {obj.map((item, itemIndex) => {
        let position = checkSlideSide(index, itemIndex, obj);

        return (
          <Component
            key={item.id}
            {...item}
            position={position}
            itemIndex={itemIndex}
            length={obj.length - 1}
            index={index}
          />
        );
      })}
    </Wrapper>
  );
};

export default CustomCarousel;
