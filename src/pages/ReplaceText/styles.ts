import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-top: 32px;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
`;

export const Actions = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  align-content: center;
  height: 100px;
`;

export default Container;
