import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 20px;
  }
`;

export const Label = styled.label`
  font-size: var(--fs-m);
`;

export const Input = styled.input`
  width: 380px;
  height: 49px;
  border: none;
  background-color: var(--clr-input-bg);
  border-radius: 8px;
`;
