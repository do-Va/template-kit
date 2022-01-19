import styled from 'styled-components';

export const Wrapper = styled.blockquote`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  transition: all 0.3s linear;

  opacity: ${props => (props.position === 'activeSlide' ? 1 : 0)};

  transform: ${props =>
    props.position === 'activeSlide'
      ? 'translateX(0)'
      : props.position === 'lastSlide'
      ? 'translateX(-100%)'
      : 'translateX(100%)'};

  top: 0;
  left: 0;

  gap: 25px;

  color: var(--clr-primary-paragraph);
`;

export const TestimonialImage = styled.img``;

export const BlockquoteImage = styled.img`
  align-self: flex-start;
  margin-top: 53px;
`;

export const Container = styled.div``;

export const TestimonialText = styled.p`
  font-size: var(--fs-xl);
  line-height: var(--lh-xl);
  margin-bottom: 13px;

  max-width: 482px;
`;

export const TestimonialAuthor = styled.p`
  font-size: var(--fs-xxl);
  line-height: var(--lh-xxl);
  font-weight: var(--fw-medium);
`;

export const TestimonialJob = styled.p`
  font-size: var(--fs-l);
  line-height: var(--lh-l);
`;

export const TestimomialLogo = styled.img`
  margin-left: -25px;
`;

export const DotContainer = styled.div`
  display: flex;
  gap: 10px;
`;
