import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.primary};
  width: 100%;
  height: 62px;
`;

export const Title = styled.div`
  color: ${(props) => props.theme.text};
  font-weight: bold;
  font-size: 20px;
`;
