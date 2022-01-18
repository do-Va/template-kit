export const checkSlideSide = (index, itemIndex, object) => {
  let position = 'nextSlide';

  if (itemIndex === index) {
    position = 'activeSlide';
  }

  if (
    itemIndex === index - 1 ||
    (index === 0 && itemIndex === object.length - 1)
  ) {
    position = 'lastSlide';
  }

  return position;
};
