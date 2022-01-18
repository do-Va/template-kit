import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid var(--clr-line);
  background-color: ${props =>
    props.isFull === true ? 'var(--clr-line)' : 'var(--clr-white)'};
`;
