import styled from 'styled-components';

export const Wrapper = styled.button`
  width: ${props => (props.width ? props.width : 230)}px;
  height: ${props => (props.height ? props.height : 60)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  font-size: ${props => (props.fontSize ? props.fontSize : 18)}px;
  color: ${props =>
    props.isEmpty ? 'var(--clr-primary)' : 'var(--clr-white)'};
  background-color: ${props =>
    props.isEmpty ? 'var(--clr-white)' : 'var(--clr-primary)'};

  border-radius: 8px;
  border: 1px solid var(--clr-primary);
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    color: ${props => props.isEmpty && 'var(--clr-white)'};
    background-color: ${props =>
      props.isEmpty ? 'var(--clr-primary)' : 'var(--clr-primary-drk)'};
  }
`;

export const Arrow = styled.span`
  position: absolute;
  right: 14px;
`;
