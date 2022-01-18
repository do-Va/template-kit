import styled from 'styled-components';

export const Wrapper = styled.div`
  color: var(--clr-mc-fanning);
`;

export const Title = styled.h4`
  font-size: var(--fs-h4);
  line-height: var(--lh-h4);
  font-weight: var(--fw-bold);
  margin-bottom: 15px;
`;

export const Text = styled.p`
  font-size: var(--fs-xl);
  line-height: var(--lh-xl);
  max-width: 299px;
  margin-bottom: 40px;
`;

export const Form = styled.form``;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  input:checked ~ div::after,
  input:checked ~ div::before {
    opacity: 1;
  }
`;

export const CheckBoxButton = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--clr-line);
  border-radius: 4px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    width: 100%;
    height: 2px;
    background: var(--clr-primary);
    position: absolute;
    border-radius: inherit;
    opacity: 0;
    transform: rotate(45deg);
    left: 0;
  }

  &::before {
    content: '';
    width: 100%;
    height: 2px;
    background: var(--clr-primary);
    position: absolute;
    border-radius: inherit;
    opacity: 0;
    transform: rotate(-45deg);
    right: 0;
  }
`;

export const CheckBox = styled.input`
  display: none;
`;

export const Label = styled.label`
  font-size: var(--fs-m);
  cursor: pointer;
`;

export const Link = styled.a`
  display: inline-block;
  font-weight: var(--fw-bold);
  font-size: var(--fs-m);
  margin: 23px 0 30px;
`;

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6.7px;
  margin-bottom: 25px;
`;

export const Line = styled.div`
  width: 132.64px;
  height: 1px;
  background-color: var(--clr-form-line);
  display: inline-block;
`;

export const LineText = styled.p`
  font-size: var(--fs-m);
`;

export const FacebookButton = styled.button`
  width: 379px;
  height: 50px;
  border-radius: 8px;
  border: 1.5px solid var(--clr-primary);
  color: var(--clr-primary);
  font-size: var(--fs-m);

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  cursor: pointer;
`;

export const FacebookIcon = styled.img`
  position: absolute;
  left: 12px;
`;

export const VerticalLine = styled.div`
  height: 50px;
  width: 1.5px;
  background-color: var(--clr-primary);
  position: absolute;
  left: 50px;
`;
