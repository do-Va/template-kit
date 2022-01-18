import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 619px;
  color: var(--clr-primary-paragraph);
`;

export const HeadingPrimary = styled.h1`
  font-size: var(--fs-h1);
  line-height: var(--lh-h1);
  margin-bottom: 22px;
  font-weight: var(--fw-bold);
  color: var(--clr-secondary);
`;

export const Rectangle = styled.div`
  width: 230px;
  height: 10px;
  margin-bottom: 52px;

  background-color: var(--clr-primary);
`;

export const Description = styled.p`
  display: inline-block;
  font-size: var(--fs-xl);
  line-height: var(--lh-xl);
  max-width: 489px;
  margin-bottom: 55px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 21px;
  gap: 19px;
`;

export const Information = styled.p`
  font-size: var(--fs-m);
`;

export const InformationLink = styled.a`
  color: var(--clr-primary);
`;

export const Scroll = styled.div`
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

export const Line = styled.div`
  width: 69px;
  height: 2px;
  background-color: var(--clr-primary);
  transform: rotate(90deg);
  position: absolute;
  bottom: 25%;
  left: -22.5px;
`;
