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

  button {
    cursor: pointer;
    padding: 10px 25px 10px 25px;
    border: 1px solid ${(props) => props.theme.primary};
    border-radius: 10px;
    color: ${(props) => props.theme.primary};
    background: transparent;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      box-shadow: 0 0 8px ${(props) => props.theme.primary};
    }

    :disabled {
      box-shadow: none;
      color: ${(props) => props.theme.textDisable};
      border: 1px solid ${(props) => props.theme.inputDisabled};
    }
  }
`;

export default Container;
