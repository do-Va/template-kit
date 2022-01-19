import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  overflow: ${props => (props.hidden ? 'hidden' : 'visible')};
  height: ${props => (props.height ? props.height : 380)}px;
  max-width: ${props => (props.width ? props.width + '%' : 980 + 'px')};
  margin: 0 auto;
`;
