import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 4px;
`;

export const Form = styled.form`
  display: flex;
  row-gap: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  column-gap: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
`;

export const ImportArea = styled.div`
  height: 80%;
  width: 100%;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: auto;
  width: 100%;
  height: 10%;
`;

export default Container;
