import styled from 'styled-components';

export const Container = styled.div<{ hasMessages: boolean }>`
  display: ${(props) => (props.hasMessages ? 'block' : 'none')};
  position: fixed;
  right: 0;
  top: 0;
  padding: 80px 30px;
  overflow: hidden;
  z-index: 9999;
`;

export default Container;
