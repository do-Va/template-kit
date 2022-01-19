import styled from 'styled-components';

export const Wrapper = styled.figure`
  position: absolute;
  width: 682px;
  height: 280px;

  display: flex;

  transition: all 0.3s linear;

  opacity: ${props =>
    props.index === props.itemIndex
      ? 1
      : props.index === props.itemIndex + 1
      ? 1
      : props.index === props.itemIndex - 1
      ? 1
      : props.index === props.length && props.itemIndex === 0
      ? 1
      : 0};

  transform: ${props =>
    props.position === 'activeSlide'
      ? 'translateX(-50%)'
      : props.position === 'lastSlide'
      ? 'translateX(-160%)'
      : 'translateX(60%)'};

  top: 0;
  left: 50%;
  border-radius: 8px;
  background-color: var(--clr-input-bg);
  color: var(--clr-primary-paragraph);
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  width: 280px;
  height: 280px;
  background-color: var(--clr-primary-alt);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserImage = styled.img``;

export const ContentContainer = styled.figcaption`
  width: 402px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 61px;
`;

export const Author = styled.h4`
  font-size: var(--fs-h4);
  line-height: var(--lh-h4);
  font-weight: var(--fw-bold);
  margin-bottom: 12px;
`;

export const Job = styled.p`
  font-size: var(--fs-xxl);
  line-height: var(--lh-xxl);
  margin-bottom: 18px;
`;

export const SocialContainer = styled.div`
  display: flex;

  gap: 20px;
`;

export const Social = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid var(--clr-line);
  padding: 7px;
`;

export const SocialIcon = styled.img``;
